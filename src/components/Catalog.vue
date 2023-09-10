<script setup>
import {useProductStore} from "@/stores/product-store";
import {onMounted} from "vue";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getProductsList();
});
</script>

<template>
  <h1 class="text-4xl font-bold p-10">Catalog</h1>
  <div class="px-10 pb-10 grid grid-cols-4 gap-7">
    <div v-for="product in productStore.products" :key="product?.id" class="border border-gray-200 rounded flex flex-col justify-between">
      <img :src="product?.thumbnail" alt="" class="min-h-[240px] max-h-[240px] w-full object-cover rounded-t" />
        <div class="bg-gray-200 p-5 h-full">
          <h1 class="text-2xl font-medium capitalize mb-2">{{ product?.title }}</h1>
          <p><span class="font-medium">Brand: </span> {{ product?.brand }}</p>
          <p><span class="font-medium">Price: </span> {{ product?.price }}</p>
          <p><span class="font-medium">Discount: </span> {{ product?.discountPercentage }}%</p>
          <p><span class="font-medium">Stock: </span> {{ product?.stock }}</p>
          <p><span class="font-medium">Category: </span> {{ product?.category }}</p>
        </div>
    </div>
  </div>
</template>