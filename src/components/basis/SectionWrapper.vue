<script setup>
defineProps({
  sectionColors: {
    type: String,
    default: '#fff',
  },
  sectionWidth: {
    type: String,
    default: '1280px',
  },
  sectionPadding: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <div
    class="font-inter"
    :style="{
      backgroundColor: sectionColors,
      paddingLeft: sectionPadding,
      paddingRight: sectionPadding,
    }"
  >
    <div class="w-full mx-auto" :style="{ maxWidth: sectionWidth }">
      <slot></slot>
    </div>
  </div>
</template>
