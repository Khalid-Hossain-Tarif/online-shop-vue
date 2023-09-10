import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/components/Catalog.vue";
import ProductDetails from "@/components/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: ProductDetails
    },
  ]
})

export default router
