<script setup>
defineProps({
  step: {
    type: Number,
    default: 1,
  },
  stepTitle: String,
  stepText: String,
})
</script>

<template>
  <div class="max-w-[512px] space-y-6 max-sm:space-y-3">
    <div class="px-4 py-[5px] bg-secondaryScale10 rounded-[4px] w-max">
      <span class="text-[30px] leading-[34px] text-secondary font-semibold">{{ step }}</span>
    </div>
    <h3 class="text-sm font-semibold text-primary leading-tighest mb-4 max-sm:mb-0">
      {{ stepTitle }}
    </h3>
    <p class="text-[18px] text-greyScale300 sm:leading-tigher max-sm:text-[14px]">{{ stepText }}</p>
  </div>
</template>
