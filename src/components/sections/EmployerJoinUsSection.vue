<script setup>
import PrimaryButton from '../basis/PrimaryButton.vue'
import SectionWrapper from '../basis/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper section-colors="#F3F4F6">
    <section class="py-[70px] flex items-center justify-center">
      <div class="max-w-[768px] w-full flex flex-col items-center text-center">
        <h2 class="text-[36px] font-semibold leading-[44px] mb-[20px]">Rejoignez nous</h2>
        <p class="text-sm text-greyScale300 leading-tighest mb-[30px]">
          Rejoignez la communauté WorkFlex et accèdez à des intérimaires disponibles immédiatement
          pour couvrir vos pics d’activité sans lourdeur administrative.
        </p>
        <PrimaryButton label="Publier une mission" route="/poster-un-job" />
      </div>
    </section>
  </SectionWrapper>
</template>
