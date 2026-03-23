import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/bar',
      name: 'bar',
      component:() => import('../views/BarChart.vue')
    },
  ],
})

export default router
