// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Application.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'home' },
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/application/Home.vue'),
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/application/Setting.vue'),
      },
      {
        path: '/user/:userId',
        name: 'user',
        component: () => import('@/views/application/UserUserId.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
