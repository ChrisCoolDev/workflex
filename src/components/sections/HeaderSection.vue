<script setup>
import SecondaryButton from '../basis/SecondaryButton.vue'
import SectionWrapper from '../basis/SectionWrapper.vue'
import interimHeader from '@/assets/images/interimHeader.png'
import whatsappWidget from '@/assets/images/whatsappWidget.svg'
</script>
<template>
  <SectionWrapper section-colors="#F9F9F9">
    <header
      class="flex items-center sm:justify-between py-[60px] max-sm:flex-col max-sm:py-[40px] max-sm:space-y-16"
    >
      <div class="max-w-[657px] w-full">
        <h1 class="text-[56px] font-bold leading-[110%] text-primary mb-6 max-sm:text-[40px]">
          L'interim qui s'adapte a vous
        </h1>
        <p class="text-xs text-greyScale300 leading-tigh mb-[48px] max-sm:mb-[30px]">
          Nous connectons des jeunes avec des opportunités d'emploi flexible qui s'ajustent à leur
          emploi du temps. Que vous soyez étudiant ou jeune actif, trouvez des missions temporaires
          qui correspondent à votre disponibilité.
        </p>
        <div>
          <SecondaryButton label="Trouver une mission" route="/trouver-une-mission" />
        </div>
      </div>
      <div class="relative">
        <img :src="interimHeader" alt="" />
        <img
          :src="whatsappWidget"
          alt=""
          class="absolute z-10 left-[-64px] bottom-[70px] max-sm:hidden"
        />
      </div>
    </header>
  </SectionWrapper>
</template>
