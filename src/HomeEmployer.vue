<script setup>
import AppLayout from './components/layout/AppLayout.vue'
import EmployerAboutUsSection from './components/sections/EmployerAboutUsSection.vue'
import EmployerHeaderSection from './components/sections/EmployerHeaderSection.vue'
import EmployerJoinUsSection from './components/sections/EmployerJoinUsSection.vue'
import EmployerWhyUsSection from './components/sections/EmployerWhyUsSection.vue'
</script>

<template>
  <AppLayout>
    <EmployerHeaderSection />
    <EmployerAboutUsSection />
    <EmployerWhyUsSection />
    <EmployerJoinUsSection />
  </AppLayout>
</template>

<style scoped></style>
