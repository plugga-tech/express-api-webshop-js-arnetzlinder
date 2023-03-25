import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/orders',
      name: 'Se dina ordrar',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/about',
      name: 'Skapa användare',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {    
      path: '/produkter',
      name: 'Produkter',
      component: () => import('../views/ProductView.vue')
    }


  ]
})

export default router
