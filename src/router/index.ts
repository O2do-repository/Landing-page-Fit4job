import { createRouter, createWebHistory } from 'vue-router'

// On importe AppView ou la page principale
import App from '../App.vue'
import Home from '../views/Home.vue'
import ThankYou from '../views/ThankYou.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/thank-you', name: 'ThankYou', component: ThankYou },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
