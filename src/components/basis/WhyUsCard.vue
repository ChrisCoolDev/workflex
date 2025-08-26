<script setup>
defineProps({
  title: String,
  content: String,
})
</script>
<template>
  <div class="bg-[#173855] w-full rounded-xxl py-5 px-4 max-w-[361px] w-full">
    <div class="bg-[#2E4C66] rounded-full p-3 w-max mb-[20px]">
      <slot></slot>
    </div>
    <h3 class="mb-2 font-semibold text-sm">{{ title }}</h3>
    <p class="leading-tigh test-xs">{{ content }}</p>
  </div>
</template>
