<script setup>
import { useProductsStore } from "../stores/product-store";

const productStore = useProductsStore();
const removeFromCart = (id) => {
    productStore.removeFromCart(id)
}
</script>

<template>
    <div class="p-10">
        <h1 class="text-4xl font-bold">Cart</h1>

        <div v-if="productStore.cart.length < 1" class="text-center">
            <h3 class="font-semibold mb-4">Cart is empty. Please add to cart a product.......</h3>
            <router-link to="/" class="inline-block bg-blue-600 px-5 py-1 mb-2 rounded text-sm text-white">Buy a product</router-link>
        </div>

        <div v-else class="mt-5 border border-gray-200 rounded shadow-md p-5 flex justify-between items-center" v-for="item in productStore.cart" :key="item.cart">
            <img :src="item?.thumbnail" alt="" class="w-24">
            <h1 class="text-xl font-bold capitalize">{{ item?.title }}</h1>
            <p><span class="font-medium">Brand: </span> {{ item?.brand }}</p>
            <p><span class="font-medium">Price: </span> {{ item?.price }}</p>
            <button @click="removeFromCart(item.id)" class="inline-block bg-red-600 px-3 py-1 rounded text-sm text-white">Remove</button>
        </div>
    </div>
</template>