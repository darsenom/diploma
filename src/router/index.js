import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesAndPricesPage from '@/views/ServicesAndPricesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicesandprices',
      name: 'servicesAndPrices',
      component: ServicesAndPricesPage
    },
  ],
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
      return{savedPosition}
    }

    else if (to.hash) {
      return{el: to.hash,behavior: 'smooth',}
    }

    return{
      x:0,
      y:0
    }
  }
})



export default router
