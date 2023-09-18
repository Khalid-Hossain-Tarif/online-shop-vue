import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    getProductsList(){
      fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(data => this.products = data.products);
    },

    addToCart(product){
      this.cart.push(product);
    }, 

    removeFromCart(id){
      this.cart = this.cart.filter(item => item.id !== id)
    }
  }
});