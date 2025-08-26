<script setup>
import SectionWrapper from './components/basis/SectionWrapper.vue'
import AppLayout from './components/layout/AppLayout.vue'

const policyArticles = [
  {
    title: "Article 1 : Objet et Champ d'Application",
    content:
      "La présente politique définit les conditions de confidentialité, les responsabilités et les mesures de sécurité relatives aux services de placement temporaire fournis par notre agence d'intérim. Elle s'applique à tous les employeurs utilisant nos services au Cameroun.",
  },
  {
    title: 'Article 2 : Nature du Service de Placement',
    content:
      "Notre agence agit en tant qu'intermédiaire de placement et de mise en relation entre employeurs et intérimaires. Nous facilitons la connexion entre l'offre et la demande d'emploi temporaire sans garantir l'exactitude absolue de toutes les informations communiquées par les candidats.",
  },
  {
    title: 'Article 3 : Limitations de Responsabilité',
    content: `3.1 Vérification des Informations
Bien que nous procédions à une évaluation préalable des profils, nous ne pouvons garantir la véracité complète et l'exactitude de l'ensemble des informations personnelles et professionnelles fournies par les intérimaires lors de leur inscription.

3.2 Responsabilité de l'Employeur
L'employeur demeure entièrement responsable de la vérification finale de l'identité et des qualifications de tout intérimaire avant son intégration au sein de son organisation.`,
  },
  {
    title: 'Article 4 : Mesures de Sécurité Obligatoires',
    content: `4.1 Vérification d'Identité
L'employeur s'engage à :
- Exiger une photocopie certifiée de la Carte Nationale d'Identité (CNI) de chaque intérimaire
- Vérifier l'authenticité du document d'identité présenté
- Conserver une copie de ces documents conformément à la réglementation en vigueur

4.2 Localisation et Contact
Pour des raisons de sécurité et de suivi, l'employeur doit obligatoirement :
- Obtenir un plan de localisation détaillé du domicile de l'intérimaire`,
  },
  {
    title: 'Article 5 : Protection des Données',
    content: `5.1 Confidentialité
Toutes les informations personnelles des intérimaires communiquées par notre agence sont strictement confidentielles et ne peuvent être utilisées qu'aux fins du contrat de travail temporaire.

5.2 Sécurisation des Documents
L'employeur s'engage à :
- Sécuriser l'accès aux documents d'identité collectés
- Ne pas divulguer les informations personnelles à des tiers non autorisés
- Détruire ou restituer les documents à la fin de la mission d'intérim`,
  },
  {
    title: 'Article 6 : Procédure de Signalement',
    content: `En cas d'incident, d'irrégularité ou de doute concernant l'identité ou la conduite d'un intérimaire, l'employeur s'engage à nous informer immédiatement afin que nous puissions prendre les mesures appropriées.`,
  },
  {
    title: 'Article 7 : Engagement de Qualité',
    content: `Malgré ces limitations, nous nous engageons à :
- Effectuer une présélection rigoureuse de nos candidats
- Maintenir une base de données actualisée
- Améliorer continuellement nos processus de vérification
- Vous accompagner activement dans la recherche des profils adaptés à vos besoins`,
  },
  {
    title: 'Article 8 : Acceptation',
    content: `L'utilisation de nos services implique l'acceptation pleine et entière de la présente politique. Nous remercions nos partenaires employeurs pour leur compréhension et leur collaboration dans le respect de ces mesures de prudence.`,
  },
]
</script>

<template>
  <AppLayout>
    <SectionWrapper>
      <section class="py-[96px]">
        <div class="space-y-3">
          <h3 class="text-secondary font-semibold text-xs leading-tigh">
            Politique de confidentialité
          </h3>
          <h1 class="text-[36px] font-semibold leading-[44px] text-primary">
            Politique de Confidentialité et de Responsabilité - Employeurs
          </h1>
        </div>
        <div class="space-y-7 mt-5">
          <div v-for="(article, index) in policyArticles" :key="index" class="space-y-4">
            <h2 class="text-[#556D82] text-sm leading-tighest font-semibold">
              {{ article.title }}
            </h2>
            <p class="text-[#556D82] text-xs leading-tighest preserve-whitespace">
              {{ article.content || 'Contenu non disponible' }}
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  </AppLayout>
</template>
