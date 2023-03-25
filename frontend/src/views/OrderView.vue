<script setup lang="ts">
import OrderShow from '@/components/OrderShow.vue';
import { reactive } from 'vue';
// import { onMounted } from 'vue';

const state = reactive({
    orders: []
});


fetch("http://localhost:3000/api/orders", {credentials: 'include'})
.then((response) => response.json())
.then((data) => { 
    console.log(data)
    state.orders = data;
       //console.log(products)
    });

</script>

<template>
    <div class="order-view">
        <OrderShow v-for="(order, index) in state.orders" :order-data="order" :key="index" />
    </div>
</template>

<!-- <template>
    <div>
        <div v-for="product in products" :key="product.id">
            <img :src="require(`@/public/images/${product.imageFileName}`)" :alt="product.name">
            <h2> {{ product.name }}</h2>
            <p> {{ product.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            products: []
        };
    },
    mounted() {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        })
        .catch(error => {
            console.error('Error fetching products', error);
        });
    }
};

</script> -->

<style scoped>
    h1 {
        margin: 2rem;
    }
    .order-view {
        background-color: rgb(248, 170, 248);
    }

</style>