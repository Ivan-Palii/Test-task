// Composables
import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import MainPage from '@/pages/MainPage.vue'


const routes = [
  {
    path: '/Test-task/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Main',
        component: MainPage
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
