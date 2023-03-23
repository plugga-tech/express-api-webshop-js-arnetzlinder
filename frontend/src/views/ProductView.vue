<script setup lang="ts">
import ProductShow from '@/components/ProductShow.vue';

let products: any = null;

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/api/products");
    products = await response.json();
    console.log(products);
    return products;
}

fetchProducts().then(products => {
    products;
});

</script>

<template>
    <div>
        <ProductShow v-for="(products, index) in products" :product-data="products" :key="index" />
    </div>
</template>

<style scoped>
    h1 {
        margin: 2rem;
    }

</style>