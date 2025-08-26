<script setup>
import SectionWrapper from '../basis/SectionWrapper.vue'
import StepCard from '../basis/StepCard.vue'
import step1 from '@/assets/images/step1.png'
import step2 from '@/assets/images/step2.png'
import step3 from '@/assets/images/step3.png'
</script>

<template>
  <SectionWrapper>
    <section class="pb-[96px] pt-[26px]">
      <div class="text-center mb-[70px]">
        <h3 class="text-secondary text-xs font-semibold leading-tigh mb-3">Comment ca marche?</h3>
        <h2 class="font-semibold text-xxl leading-[44px] text-primary">
          Un processus simple et efficace en 3 étapes
        </h2>
      </div>
      <div class="space-y-[96px] max-sm:space-y-[40px]">
        <div class="flex items-center justify-between max-sm:flex-col max-sm:space-y-8">
          <StepCard
            step="1"
            step-title="Faites le premier pas"
            step-text="Inscrivez-vous gratuitement sur notre plateforme en quelques minutes. Créez votre profil professionnel détaillé en renseignant vos compétences, votre expérience, vos disponibilités et vos préférences de travail. Plus votre profil est complet, plus nous pouvons identifier rapidement les missions qui vous correspondent parfaitement"
          />
          <img :src="step1" alt="" class="max-w-[620px] w-full max-sm:rounded-lg" />
        </div>
        <div class="flex items-center justify-between max-sm:flex-col max-sm:space-y-8">
          <img :src="step2" alt="" class="max-w-[620px] w-full max-sm:hidden" />
          <StepCard
            step="2"
            step-title="On vous contacte"
            step-text="Notre équipe analyse votre profil et vous contacte pour obtenir quelques informations supplémentaires (votre disponibilité). Nous définissons le type de missions qui correspondent à votre emploi du temps et à vos objectifs professionnels."
          />
          <img :src="step2" alt="" class="max-w-[620px] w-full sm:hidden rounded-lg" />
        </div>
        <div class="flex items-center justify-between max-sm:flex-col max-sm:space-y-8">
          <StepCard
            step="3"
            step-title="On vous propose une mission"
            step-text="Dès qu'une opportunité correspond à votre profil, nous vous la proposons immédiatement. Vous recevez tous les détails : description du poste, durée, rémunération, lieu et dates. Vous êtes libre d'accepter ou de refuser selon votre disponibilité. Une fois acceptée, nous vous accompagnons jusqu'au début de votre mission."
          />
          <img :src="step3" alt="" class="max-w-[620px] w-full max-sm:rounded-lg" />
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>
