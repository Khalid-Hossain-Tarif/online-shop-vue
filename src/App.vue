<script setup>
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import { useProductsStore } from './stores/product-store';

const router = useRouter();
const productStore = useProductsStore();
</script>

<template>
  <div class="bg-gray-200 px-10 py-3 flex justify-between">
    <router-link to="/" class="font-semibold text-xl">Home</router-link>
    <p class="font-semibold text-xl cursor-pointer transition-all hover:text-blue-600"  @click="router.push({name: 'cart'})">Cart items: {{ productStore.cart.length }}</p>
  </div>

  <RouterView />
</template>