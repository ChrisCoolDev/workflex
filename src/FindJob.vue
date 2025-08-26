<script setup>
import { ref, computed } from 'vue'
import AppLayout from './components/layout/AppLayout.vue'
import findJob from '@/assets/images/findJob.png'
import { supabase } from '../lib/supabase.js'

// Données du formulaire avec valeurs par défaut
const formData = ref({
  nom: '',
  prenom: '',
  dateNaissance: '',
  sexe: 'Homme', // Valeur par défaut
  ville: '',
  arrondissement: '',
  quartier: '',
  statut: '',
  email: '',
  telephone: '',
  permisConduire: 'Pas de permis', // Valeur par défaut
  commentaire: '',
})

// Options pour les dropdowns
const sexeOptions = ['Homme', 'Femme']
const villeOptions = ['Douala', 'Yaoundé']
const statutOptions = ['Étudiant(e)', 'Jeune actif']
const permisOptions = ['A', 'B', 'C', 'Pas de permis']

// Arrondissements par ville
const arrondissementsData = {
  Douala: ['Douala 1er', 'Douala 2e', 'Douala 3e', 'Douala 4e', 'Douala 5e', 'Douala 6e'],
  Yaoundé: [
    'Yaoundé 1er',
    'Yaoundé 2e',
    'Yaoundé 3e',
    'Yaoundé 4e',
    'Yaoundé 5e',
    'Yaoundé 6e',
    'Yaoundé 7e',
  ],
}

// Arrondissements disponibles selon la ville sélectionnée
const arrondissementsDisponibles = computed(() => {
  return formData.value.ville ? arrondissementsData[formData.value.ville] || [] : []
})

// Réinitialiser l'arrondissement quand la ville change
const onVilleChange = () => {
  formData.value.arrondissement = ''
}

// Gestion du fichier CV
const cvFileName = ref('')
const cvFile = ref(null)

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Validation du fichier
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      errorMessage.value = 'Le fichier est trop volumineux (max 10MB)'
      return
    }

    // Types de fichiers acceptés
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(file.type)) {
      errorMessage.value = 'Type de fichier non supporté. Utilisez PDF, DOC ou DOCX'
      return
    }

    cvFile.value = file
    cvFileName.value = file.name
    errorMessage.value = '' // Effacer les erreurs précédentes
  } else {
    cvFile.value = null
    cvFileName.value = ''
  }
}

// Formater la date en jj-mm-yyyy
const formatDateInput = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length >= 2) {
    value = value.substring(0, 2) + '-' + value.substring(2)
  }
  if (value.length >= 5) {
    value = value.substring(0, 5) + '-' + value.substring(5, 9)
  }
  event.target.value = value
  formData.value.dateNaissance = value
}

// États pour la soumission
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const uploadProgress = ref(0)

// Validation des données
const validateForm = () => {
  const errors = []

  if (!formData.value.nom.trim()) errors.push('Le nom est requis')
  if (!formData.value.prenom.trim()) errors.push('Le prénom est requis')
  if (!formData.value.dateNaissance) errors.push('La date de naissance est requise')
  if (!formData.value.ville) errors.push('La ville est requise')
  if (!formData.value.arrondissement) errors.push("L'arrondissement est requis")
  if (!formData.value.quartier.trim()) errors.push('Le quartier est requis')
  if (!formData.value.statut) errors.push('Le statut est requis')
  if (!formData.value.email.trim()) errors.push("L'email est requis")
  if (!formData.value.telephone.trim()) errors.push('Le téléphone est requis')
  if (!cvFile.value) errors.push('Le CV est requis')

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (formData.value.email && !emailRegex.test(formData.value.email)) {
    errors.push("Format d'email invalide")
  }

  // Validation date (format jj-mm-yyyy)
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/
  if (formData.value.dateNaissance && !dateRegex.test(formData.value.dateNaissance)) {
    errors.push('Format de date invalide (jj-mm-yyyy)')
  }

  return errors
}

// Fonction principale de soumission
const submitForm = async () => {
  if (isSubmitting.value) return

  // Reset des messages
  successMessage.value = ''
  errorMessage.value = ''

  // Validation
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
    errorMessage.value = validationErrors.join(', ')
    return
  }

  isSubmitting.value = true
  uploadProgress.value = 0

  try {
    let cvUrl = null
    let fileName = null

    // 1. Upload du CV
    if (cvFile.value) {
      uploadProgress.value = 25

      const fileExt = cvFile.value.name.split('.').pop()
      fileName = `cv-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { data, error: uploadError } = await supabase.storage
        .from('cv-uploads')
        .upload(`cvs/${fileName}`, cvFile.value, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) {
        throw new Error('Erreur upload CV: ' + uploadError.message)
      }

      // Récupérer l'URL publique
      const { data: urlData } = supabase.storage.from('cv-uploads').getPublicUrl(`cvs/${fileName}`)

      cvUrl = urlData.publicUrl
      uploadProgress.value = 50
    }

    // 2. Vérifier si l'email existe déjà
    const { data: existingCandidate } = await supabase
      .from('candidatures')
      .select('email')
      .eq('email', formData.value.email.trim())
      .single()

    if (existingCandidate) {
      throw new Error('Cette adresse email a déjà été utilisée pour une candidature')
    }

    // 3. Insérer les données
    uploadProgress.value = 75

    const candidatureData = {
      id: crypto.randomUUID(),
      nom: formData.value.nom.trim(),
      prenom: formData.value.prenom.trim(),
      email: formData.value.email.trim(),
      telephone: formData.value.telephone.trim(),
      dateNaissance: formData.value.dateNaissance,
      sexe: formData.value.sexe,
      ville: formData.value.ville,
      arrondissement: formData.value.arrondissement,
      quartier: formData.value.quartier.trim(),
      statut: formData.value.statut,
      permisConduire: formData.value.permisConduire,
      cvUrl: cvUrl,
      cvFilename: fileName,
      commentaire: formData.value.commentaire.trim() || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const { data, error: insertError } = await supabase
      .from('candidatures')
      .insert([candidatureData])
      .select()

    if (insertError) {
      throw new Error('Erreur sauvegarde: ' + insertError.message)
    }

    uploadProgress.value = 100
    successMessage.value = 'Candidature envoyée avec succès ! Nous vous recontacterons bientôt.'

    // Reset du formulaire après succès
    resetForm()
  } catch (error) {
    console.error('Erreur soumission:', error)
    errorMessage.value = error.message || "Une erreur est survenue lors de l'envoi"
  } finally {
    isSubmitting.value = false
    uploadProgress.value = 0

    // Effacer les messages après 5 secondes
    setTimeout(() => {
      successMessage.value = ''
      errorMessage.value = ''
    }, 5000)
  }
}

// Reset du formulaire
const resetForm = () => {
  formData.value = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    sexe: 'Homme',
    ville: '',
    arrondissement: '',
    quartier: '',
    statut: '',
    email: '',
    telephone: '',
    permisConduire: 'Pas de permis',
    commentaire: '',
  }

  cvFileName.value = ''
  cvFile.value = null

  // Reset l'input file
  const fileInput = document.getElementById('cv')
  if (fileInput) fileInput.value = ''
}
</script>

<template>
  <AppLayout>
    <section class="flex">
      <div class="w-full max-sm:hidden">
        <img :src="findJob" alt="" class="h-full w-full" />
      </div>
      <div class="py-[96px] max-sm:py-[45px] flex items-center justify-center px-4 w-full">
        <div class="max-w-[512px] w-full space-y-[48px] max-sm:space-y-7 mx-auto">
          <h1
            class="text-primary text-[48px] leading-[60px] font-semibold max-sm:text-[32px] max-sm:leading-[130%] max-sm:font-bold"
          >
            Trouver une mission dès maintenant
          </h1>

          <!-- Messages de statut -->
          <div
            v-if="successMessage"
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
          >
            ✅ {{ successMessage }}
          </div>
          <div
            v-if="errorMessage"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          >
            ❌ {{ errorMessage }}
          </div>

          <!-- Progress bar pendant l'envoi -->
          <div v-if="isSubmitting" class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: uploadProgress + '%' }"
            ></div>
          </div>

          <form @submit.prevent="submitForm">
            <div class="space-y-6">
              <!-- Noms et Prénoms -->
              <div class="flex space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6">
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label for="nom" class="text-[14px] font-medium leading-[20px] text-greyScale300">
                    Noms <span>*</span>
                  </label>
                  <input
                    id="nom"
                    v-model="formData.nom"
                    type="text"
                    placeholder="chris"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="prenom"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Prénoms <span>*</span>
                  </label>
                  <input
                    id="prenom"
                    v-model="formData.prenom"
                    type="text"
                    placeholder="sultan"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
              </div>

              <!-- Date de naissance et Sexe -->
              <div class="flex space-x-8 max-sm:space-x-4 w-full">
                <div class="space-y-[6px] max-w-[240px] w-full">
                  <label
                    for="dateNaissance"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Date de naissance <span>*</span>
                  </label>
                  <div class="relative">
                    <input
                      id="dateNaissance"
                      v-model="formData.dateNaissance"
                      type="text"
                      placeholder="jj-mm-yyyy"
                      maxlength="10"
                      required
                      @input="formatDateInput"
                      class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full pr-10"
                    />
                    <div
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-400"
                      >
                        <path
                          d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="space-y-[6px] max-w-[240px] w-full">
                  <label
                    for="sexe"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Sexe <span>*</span>
                  </label>
                  <select
                    id="sexe"
                    v-model="formData.sexe"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                  >
                    <option v-for="sexe in sexeOptions" :key="sexe" :value="sexe">
                      {{ sexe }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Ville -->
              <div class="space-y-[6px]">
                <label
                  for="ville"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300 block"
                >
                  Ville <span>*</span>
                </label>
                <select
                  id="ville"
                  v-model="formData.ville"
                  required
                  @change="onVilleChange"
                  class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                >
                  <option value="">Choisir votre ville</option>
                  <option v-for="ville in villeOptions" :key="ville" :value="ville">
                    {{ ville }}
                  </option>
                </select>
              </div>

              <!-- Arrondissement et Quartier -->
              <div class="flex space-x-8 w-full max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6">
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="arrondissement"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300 block"
                  >
                    Arrondissement <span>*</span>
                  </label>
                  <select
                    id="arrondissement"
                    v-model="formData.arrondissement"
                    required
                    :disabled="!formData.ville"
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Choisir l'arrondissement</option>
                    <option
                      v-for="arrond in arrondissementsDisponibles"
                      :key="arrond"
                      :value="arrond"
                    >
                      {{ arrond }}
                    </option>
                  </select>
                </div>
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="quartier"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300 block"
                  >
                    Quartier <span>*</span>
                  </label>
                  <input
                    id="quartier"
                    v-model="formData.quartier"
                    type="text"
                    placeholder="Ex : Kotto, C Pizza"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
              </div>

              <!-- Statut -->
              <div class="space-y-[6px]">
                <label
                  for="statut"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300"
                >
                  Statut <span>*</span>
                </label>
                <select
                  id="statut"
                  v-model="formData.statut"
                  required
                  class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                >
                  <option value="">Choisir votre statut</option>
                  <option v-for="statut in statutOptions" :key="statut" :value="statut">
                    {{ statut }}
                  </option>
                </select>
              </div>

              <!-- Email et Téléphone -->
              <div class="flex space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6">
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="email"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Email <span>*</span>
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="chris@example.com"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="telephone"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Téléphone <span>*</span>
                  </label>
                  <input
                    id="telephone"
                    v-model="formData.telephone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
              </div>

              <!-- Permis et CV -->
              <div class="flex space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6">
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="permis"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Permis de conduire <span>*</span>
                  </label>
                  <select
                    id="permis"
                    v-model="formData.permisConduire"
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                  >
                    <option v-for="permis in permisOptions" :key="permis" :value="permis">
                      {{ permis }}
                    </option>
                  </select>
                </div>
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label for="cv" class="text-[14px] font-medium leading-[20px] text-greyScale300">
                    CV <span>*</span>
                  </label>
                  <div class="relative">
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      @change="onFileChange"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div
                      class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full bg-white flex items-center justify-between cursor-pointer"
                    >
                      <div class="flex items-center space-x-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-gray-400"
                        >
                          <path
                            d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L12 9.17154L14.8284 6.34311C15.6094 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39052 17.6568 9.17157L14.8284 12Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4142L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8759 6.34311 17.6569C7.12416 18.438 8.39052 18.438 9.17157 17.6569L12 14.8285Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8285 10.5857Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-xs text-gray-500">
                          {{ cvFileName || 'Ajouter un fichier (pdf)' }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Commentaire -->
              <div class="space-y-[6px] w-full">
                <label
                  for="commentaire"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300"
                >
                  Commentaire (facultatif)
                </label>
                <textarea
                  id="commentaire"
                  v-model="formData.commentaire"
                  placeholder="Laisser un message"
                  class="h-[128px] w-full px-[14px] py-[10px] border border-solid border-[#E7EBEE] rounded-lg resize-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="py-[14px] px-[20px] text-center bg-[#0B2E4C] text-white text-xs rounded-base mt-8 w-full"
            >
              {{ isSubmitting ? 'Envoi en cours' : 'Envoyer ma candidature' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
