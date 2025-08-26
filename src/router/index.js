import { createRouter, createWebHistory } from 'vue-router'
import FindJob from '@/FindJob.vue'
import NotFound from '@/NotFound.vue'
import HomePage from '@/HomePage.vue'
import PrivatePolicy from '@/PrivatePolicy.vue'
import PostJob from '@/PostJob.vue'
import HomeEmployer from '@/HomeEmployer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'interimaire',
    },
    {
      path: '/employeur',
      component: HomeEmployer,
      name: 'employer',
    },
    {
      path: '/trouver-une-mission',
      component: FindJob,
      name: 'findJob',
    },
    {
      path: '/politique-de-confidentialite',
      component: PrivatePolicy,
      name: 'politiqueDeConfidentialite',
    },
    {
      path: '/poster-un-job',
      component: PostJob,
      name: 'postJob',
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router
