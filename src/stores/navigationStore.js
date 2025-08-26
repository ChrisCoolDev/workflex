import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const router = useRouter()

  // Page active (utiliser le nom des routes Vue Router)
  const currentPage = ref(router.currentRoute.value.name)

  /**
   * Basculer entre "candidats" et "employeur",
   * en restant synchronisé avec le contexte courant.
   */
  function togglePage() {
    // Association des pages candidates <-> employeur
    const pairs = {
      interimaire: 'employer',
      employer: 'interimaire',
      findJob: 'postJob',
      postJob: 'findJob',
    }
    const nextPage = pairs[currentPage.value] || 'employer'
    currentPage.value = nextPage
    router.push({ name: nextPage })
  }

  // Pour update si on navigue manuellement
  function updateCurrentPageFromRouter() {
    currentPage.value = router.currentRoute.value.name
  }

  return {
    currentPage,
    togglePage,
    updateCurrentPageFromRouter,
  }
})
