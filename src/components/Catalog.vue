<script setup>
import {useProductsStore} from "@/stores/product-store";
import {onMounted} from "vue";
import router from "@/router";

const productStore = useProductsStore();

onMounted( () => {
   productStore.getProductsList();
});

const goProductDetails = (id) => {
  router.push({name: 'productDetails', params: {id}});
  console.log(typeof id);
};
</script>

<template>
  <h1 class="text-4xl font-bold p-10">Catalog</h1>
  <div class="px-10 pb-10 grid grid-cols-4 gap-7">
    <div v-for="product in productStore.products" :key="product?.id" @click="goProductDetails(product?.id)"
         class="border border-gray-200 shadow hover:shadow-2xl translate-y-0 hover:-translate-y-2 transition rounded flex flex-col justify-between cursor-pointer overflow-hidden">
      <img :src="product?.thumbnail" alt="" class="min-h-[240px] max-h-[240px] w-full object-cover rounded-t" />
        <div class="bg-gray-200 p-5 h-full">
          <h1 class="text-xl font-semibold capitalize mb-2">{{ product?.title }}</h1>
          <p><span class="font-medium">Brand: </span> {{ product?.brand }}</p>
          <p><span class="font-medium">Price: </span> {{ product?.price }}</p>
          <p><span class="font-medium">Discount: </span> {{ product?.discountPercentage }}%</p>
          <p><span class="font-medium">Stock: </span> {{ product?.stock }}</p>
          <p><span class="font-medium">Category: </span> {{ product?.category }}</p>
        </div>
    </div>
  </div>
</template>