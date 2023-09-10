<script setup>
import {useProductsStore} from "@/stores/product-store";
import {computed} from "vue";
import {useRoute} from "vue-router";
import router from "@/router";

const route = useRoute();
const productStore = useProductsStore();

const singleProduct = computed(() => {
  return productStore.products.find((item) => item.id === Number(route.params.id));
});
</script>

<template>
  {{ singleProduct }}

<!--  <button @click="router.push({name: 'catalog'})">Back</button>-->
<!--  <button @click="router.back()">Back</button>-->
  <router-link to="/" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Back</router-link>

  <div class="flex">
    <img :src="singleProduct?.thumbnail" alt="" class="w-1/3">
    <div class="">
      <h1 class="text-4xl font-bold p-10">{{ singleProduct?.title }}</h1>
    </div>
  </div>
</template>