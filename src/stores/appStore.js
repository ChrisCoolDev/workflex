import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const homeState = ref(true)
  const switchBetweenPage = computed(() => !homeState.value)

  return { homeState, switchBetweenPage }
})
