import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Product" */ '../views/ProductView.vue')
  },
  {
    path: '/resultsBySearch/:text',
    name: 'ResultsBySearch',
    component: () => import(/* webpackChunkName: "ResultsBySearch" */ '../views/ResultsViewBySearch.vue')
  },
  {
    path: '/resultsByLabels/:tag',
    name: 'ResultsByLabels',
    component: () => import(/* webpackChunkName: "ResultsByLabels" */ '../views/ResultsViewByLabels.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/CheckoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
