import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
  state: () => ({
    products: []
  }),

  actions: {
    getProductsList(){
      fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => this.products = json.products);
    }
  }
});