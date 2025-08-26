<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  label: String,
  route: String,
})

const router = useRouter()

const goToPage = (route) => {
  router.push(route || '/')
}
</script>
<template>
  <button
    class="py-[14px] px-[20px] text-center bg-[#0B2E4C] text-white text-xs max-sm:text-[14px] rounded-base max-sm:py-3 max-sm:px-4"
    @click="goToPage(route)"
  >
    {{ props.label }}
  </button>
</template>
