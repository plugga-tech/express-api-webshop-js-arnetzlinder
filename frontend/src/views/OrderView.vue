<script lang="ts">
import { reactive } from 'vue';

interface Order {
  _id: string;
  products: { _id: string, quantity: number, productId: {
      
        _id: string,
        name: string,
        price: number
    } 
  }[];
}


export default {
  props: [],
  setup() {
    const state = reactive({
      orders: [] as Order[],
      products: []
    });

    const fetchOrdersAndProducts = async () => {
      const [orders] = await Promise.all([
        fetch('http://localhost:3000/api/orders', { credentials: 'include' }).then(response => response.json()),
        //fetch('http://localhost:3000/api/products').then(response => response.json())
      ]);
      state.orders = orders as Order[];
    };

    fetchOrdersAndProducts();

    return {
      state
    };
  }
};
</script>

<template>
  <div class="order-view">
    <h3> Du har beställt följande:</h3>
    <div v-for="order in state.orders" :key="order._id" class="order-show">
      <p>Ordernummer: {{ order._id }}</p>
      <div v-for="product in order.products" :key="product._id">
        <p>Produkt: {{ product.productId.name }}</p>
        <p>Antal: {{ product.quantity }}</p>
        <p>Pris: {{ product.productId.price }} kr</p> 
      </div>

    </div>
  </div>
</template>

<style scoped>
    .order-view {
        margin: 1rem;
        font-size: 1rem;
    }

    h3 {
        font-weight: bold;
    }
    .order-show {
        margin: 1rem;
    }
</style>
