<script setup>
import {useProductsStore} from "@/stores/product-store";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const productStore = useProductsStore();

const singleProduct = computed(() => {
  return productStore.products.find((item) => item.id === Number(route.params.id));
});

const addToCart = () => {
  productStore.addToCart(singleProduct.value);
}
</script>

<template>
<!--  <button @click="router.push({name: 'catalog'})" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Back</button>-->
<!--  <button @click="router.back()" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Back</button>-->
<!--  <router-link :to="{name: 'catalog'}" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Back</router-link>-->
  <router-link to="/" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white m-10 mb-0">Back</router-link>

  <div class="flex gap-10 p-10">
    <div class="w-1/3 bg-gray-100 p-8">
      <img :src="singleProduct?.thumbnail" alt="" class="w-full h-96 border border-gray-200">
      <div class="mt-4 pt-4 border-t border-gray-200 flex justify-between flex-wrap gap-4">
        <img :src="image" v-for="(image, index) in singleProduct?.images" :key="index" alt="" class="w-24 h-24 border border-gray-200">
      </div>
    </div>
    <div class="w-2/3">
      <h1 class="mb-5 text-5xl font-bold capitalize">{{ singleProduct?.title }}</h1>
      <p><span class="font-medium">Brand: </span> {{ singleProduct?.brand }}</p>
      <p><span class="font-medium">Price: </span> {{ singleProduct?.price }}</p>
      <p><span class="font-medium">Discount: </span> {{ singleProduct?.discountPercentage }}%</p>
      <p><span class="font-medium">Stock: </span> {{ singleProduct?.stock }}</p>
      <p><span class="font-medium">Category: </span> {{ singleProduct?.category }}</p>
      <p><span class="font-medium">Rating: </span> {{ singleProduct?.rating }}</p>
      <p><span class="font-medium">Description: </span> {{ singleProduct?.description }}</p>
      <button @click="addToCart" class="mt-4 inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Add to cart</button>
    </div>
  </div>
</template>