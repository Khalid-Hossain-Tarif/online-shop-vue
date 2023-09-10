<script setup>
import {useProductStore} from "@/stores/product-store";
import {onMounted} from "vue";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getProductsList();
  console.log(productStore.products);
});
</script>

<template>
  <h1 class="text-3xl font-bold">Catalog</h1>

  <div>
    {{ productStore.products }}
    <div v-for="product in productStore.products" :key="product?.id">
      <img :src="product?.thumbnail" alt="" />
      <h1>{{ product?.title }}</h1>
      <p><strong>Brand: </strong> {{ product?.brand }}</p>
      <p><strong>Price: </strong> {{ product?.price }}</p>
      <p><strong>Category: </strong> {{ product?.category }}</p>
    </div>
  </div>
</template>