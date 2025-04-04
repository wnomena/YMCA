import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/components/contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Contact,
    },
  ],
})

export default router
