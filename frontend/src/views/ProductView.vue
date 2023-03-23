<script setup lang="ts">
import ProductShow from '@/components/ProductShow.vue';
</script>

<template>
    <div>
        <ProductShow v-for="(products, index) in products" :product-data="product" :key="index" />
    </div>
</template>

<style scoped>
    h1 {
        margin: 2rem;
    }

</style>