<template>
    <div>
      <div class="row">
        <div class="col-md-3">
          <shopping-cart cart="state.cart"></shopping-cart>
        </div>
        <div class="col-md-9">
          <show-category
            v-for="category in state.categories"
            :key="category._id"
            :category-data="category"
            @click="filterProducts(category._id)">
        </show-category>
          <div class="row">
            <product-show
              v-for="product in state.products"
              :key="product._id"
              :product-data="product"
              :id="product._id"
              @add-to-cart="addToCart">
            </product-show>

          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script lang="ts">
  import ProductShow from '../components/ProductShow.vue';
  import ShowCategory from '../components/ShowCategory.vue';
  import ShoppingCart from '../components/ShoppingCart.vue';
  import { reactive } from 'vue';

  interface CartItem {
    id: string,
    name: string,
    price: number;
    image: string,
    amount: number;
  }

  interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  }

  interface Category {
  _id: string;
  name: string;
  }
  
  export default {
    name: 'ProductView',
    components: {
      ProductShow,
      ShowCategory,
      ShoppingCart
    },
    props: [],
    data() {
      return {
        state: reactive({
          categories: [] as Category[],
          products: [] as Product[],
          cart: [] as CartItem[]
        }),
        productId: ''
      };
    },
    methods: {
      filterProducts(categoryId: string) {
        fetch('http://localhost:3000/api/products/category/' + categoryId, {
          credentials: 'include'
        })
          .then((response) => response.json())
          .then((data) => {
            this.state.products = data;
          });
      },
      addToCart(product: CartItem) {
        console.log(product)
        let foundItem = this.state.cart.find((item: CartItem) => item.id === product.id) as CartItem;
        if (foundItem) {
          foundItem.amount++;
        } else {
          console.log("Nytt object i varukorgen")
          this.state.cart.push(product);
        }
      }
    },
  
    beforeMount() {
      Promise.all([
        fetch('http://localhost:3000/api/products', { credentials: 'include' }).then(
          (response) => response.json()
        ),
        fetch('http://localhost:3000/api/categories').then((response) =>
          response.json()
        )
      ]).then(([products, categories]) => {
        this.state.products = products;
        this.state.categories = categories;
      });
    }
  };
  </script>
  

<style scoped>
    h1 {
        margin: 2rem;
    }

</style>