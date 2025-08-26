<script setup>
import FooterSection from '../partials/FooterSection.vue'
import NavBar from '../partials/NavBar.vue'
</script>

<template>
  <NavBar />
  <slot></slot>
  <FooterSection />
</template>
