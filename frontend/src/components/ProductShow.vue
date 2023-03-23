<script lang="ts">


export default {
    name: 'ProductShow',
    props: ['productData'],
    data() {
        return {

        };
    },
};

</script>

<template>
    <div class="show-products">
        <h2 v-html="productData.name" class="product-name"></h2>
        <p v-html="productData.description" class="product-desc"></p>
        <p v-html="productData.price" class="product-price"></p><span> kr</span>
        <p v-html="productData.lager" class="product-lager"></p>
    </div>
</template>

<style scoped>
    h1 {
        margin: 2rem;
    }
</style>