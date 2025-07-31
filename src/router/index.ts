import { createRouter, createWebHistory } from 'vue-router'

// On importe AppView ou la page principale
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
