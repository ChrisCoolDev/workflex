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
    class="py-[14px] px-[20px] text-center bg-secondary text-white text-xs rounded-base max-sm:text-[14px] max-sm:py-3 max-sm:px-4 max-sm:w-full"
    @click="goToPage(route)"
  >
    {{ props.label }}
  </button>
</template>
