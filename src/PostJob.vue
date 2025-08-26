<script setup>
import { ref } from 'vue'
import PrimaryButton from './components/basis/PrimaryButton.vue'
import AppLayout from './components/layout/AppLayout.vue'
import findJob from '@/assets/images/postjob.jpg'
import { supabase } from '../lib/supabase.js'

// Données du formulaire avec valeurs par défaut
const formData = ref({
  entrepriseNom: '',
  profilRecherche: 'Homme', // Valeur par défaut
  posteVaccant: '',
  description: '',
  duree: 'One-time', // Valeur par défaut
  email: '',
  telephone: '',
})

// Options pour les dropdowns
const profilOptions = ['Homme', 'Femme', 'Peu importe']
const dureeOptions = ['One-time', 'Délai de 7 jours max', 'Continue', 'Autre']

// États pour la soumission
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const uploadProgress = ref(0)

// Validation des données
const validateForm = () => {
  const errors = []

  if (!formData.value.entrepriseNom.trim())
    errors.push("Le nom de l'entreprise/particulier est requis")
  if (!formData.value.posteVaccant.trim()) errors.push('Le poste recherché est requis')
  if (!formData.value.description.trim()) errors.push('La description du poste est requise')
  if (!formData.value.email.trim()) errors.push("L'email est requis")

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (formData.value.email && !emailRegex.test(formData.value.email)) {
    errors.push("Format d'email invalide")
  }

  // Validation longueur description
  if (formData.value.description.trim().length < 20) {
    errors.push('La description doit contenir au moins 20 caractères')
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
    // Progression de l'envoi
    uploadProgress.value = 25

    // 1. Vérifier si l'email existe déjà
    const { data: existingBesoin } = await supabase
      .from('besoins')
      .select('email')
      .eq('email', formData.value.email.trim())
      .single()

    if (existingBesoin) {
      throw new Error('Cette adresse email a déjà été utilisée pour publier un besoin')
    }

    uploadProgress.value = 50

    // 2. Préparer les données avec ID généré côté client
    const besoinData = {
      id: crypto.randomUUID(), // Génération d'ID côté client comme dans FindJob
      entreprise_nom: formData.value.entrepriseNom.trim(),
      profil_recherche: formData.value.profilRecherche,
      poste_vaccant: formData.value.posteVaccant.trim(),
      description: formData.value.description.trim(),
      duree: formData.value.duree,
      email: formData.value.email.trim(),
      telephone: formData.value.telephone.trim() || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    uploadProgress.value = 75

    // 3. Insérer dans Supabase
    const { data, error: insertError } = await supabase
      .from('besoins')
      .insert([besoinData])
      .select()

    if (insertError) {
      throw new Error('Erreur sauvegarde: ' + insertError.message)
    }

    uploadProgress.value = 100
    successMessage.value =
      'Votre besoin a été publié avec succès ! Nous vous recontacterons bientôt avec des profils correspondants.'

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
    entrepriseNom: '',
    profilRecherche: 'Homme',
    posteVaccant: '',
    description: '',
    duree: 'One-time',
    email: '',
    telephone: '',
  }
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
            Publier un besoin de recrutement
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
              <!-- Nom entreprise/particulier -->
              <div class="space-y-[6px]">
                <label
                  for="entrepriseNom"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300"
                >
                  Nom entreprise/particulier <span>*</span>
                </label>
                <input
                  id="entrepriseNom"
                  v-model="formData.entrepriseNom"
                  type="text"
                  placeholder="Ex: Entreprise ABC ou Jean Dupont"
                  required
                  class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                />
              </div>

              <!-- Profil recherché et Durée -->
              <div class="flex space-x-8 max-sm:space-x-4 w-full">
                <div class="space-y-[6px] max-w-[240px] w-full">
                  <label
                    for="profilRecherche"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Profil recherché <span>*</span>
                  </label>
                  <select
                    id="profilRecherche"
                    v-model="formData.profilRecherche"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                  >
                    <option v-for="profil in profilOptions" :key="profil" :value="profil">
                      {{ profil }}
                    </option>
                  </select>
                </div>
                <div class="space-y-[6px] max-w-[240px] w-full">
                  <label
                    for="duree"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Durée du besoin <span>*</span>
                  </label>
                  <select
                    id="duree"
                    v-model="formData.duree"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full appearance-none"
                  >
                    <option v-for="duree in dureeOptions" :key="duree" :value="duree">
                      {{ duree }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Poste vacant/flexible -->
              <div class="space-y-[6px]">
                <label
                  for="posteVaccant"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300"
                >
                  Poste vacant/flexible recherché <span>*</span>
                </label>
                <input
                  id="posteVaccant"
                  v-model="formData.posteVaccant"
                  type="text"
                  placeholder="Ex: Développeur web, Assistant commercial, Chauffeur..."
                  required
                  class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                />
              </div>

              <!-- Description du poste -->
              <div class="space-y-[6px] w-full">
                <label
                  for="description"
                  class="text-[14px] font-medium leading-[20px] text-greyScale300"
                >
                  Description du poste <span>*</span>
                </label>
                <textarea
                  id="description"
                  v-model="formData.description"
                  placeholder="Décrivez les missions, compétences requises, conditions de travail... (minimum 20 caractères)"
                  rows="6"
                  required
                  class="w-full px-[14px] py-[10px] border border-solid border-[#E7EBEE] rounded-lg resize-none"
                ></textarea>
                <div class="text-xs text-gray-500">
                  {{ formData.description.length }}/20 caractères minimum
                </div>
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
                    placeholder="contact@entreprise.com"
                    required
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
                <div class="space-y-[6px] sm:max-w-[240px] w-full">
                  <label
                    for="telephone"
                    class="text-[14px] font-medium leading-[20px] text-greyScale300"
                  >
                    Téléphone (facultatif)
                  </label>
                  <input
                    id="telephone"
                    v-model="formData.telephone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    class="border border-solid border-[#E7EBEE] rounded-lg px-[14px] py-[10px] w-full"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="py-[14px] px-[20px] text-center bg-[#0B2E4C] text-white text-xs rounded-base mt-8 w-full"
            >
              {{ isSubmitting ? 'Publication en cours' : 'Publier mon besoin' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
