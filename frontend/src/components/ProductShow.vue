<script lang="ts">
export default {
    name: 'ProductShow',
    props: ['productData', '_id'],
    data() {
        return {
        };
    },
    emits: ['add-to-cart']
};
</script>

<template>
    <div class="show-products">
        <h2 v-html="productData.name" class="product-name"></h2>
        <img v-bind:src="'/public/images/' + productData._id + '.jpeg'" class="productImage">
        <!-- gör en find på varje bild utifrån det id som bilden har, skriv om så att nedan får en bild att arbeta med -->
        <!-- <PictureShow v-for="(picture, index) in pictures" :picture-data="picture" :key="index" /> -->
        <p class="description"> Beskrivning:</p>
        <p v-html="productData.description" class="product-desc"></p>
        <p class="description"> Pris</p>
        <p v-html="productData.price" class="product-price"></p>
        <p class="description"> Lagersaldo</p>
        <p v-html="productData.lager" class="product-lager"></p>
        <p class="description" v-if="productData.lager>10"></p>
        <p class="description" v-else-if="productData.lager<10 && productData.lager>0">Nästan slutsålt</p>
        <p class="description" v-else>Slutsålt</p>
        <button @click="$emit('add-to-cart', productData._id)" class="product-name">Lägg i kundvagn!</button>
    </div>
</template>

<style scoped>
    h2 {
        font-weight: bold;
    }
    .show-products {
        margin: 1rem;
        

    }
    .description {
        font-style: italic;

    }

    .productImage {
        width: 200px;
        border-radius: 1rem;
    }
</style>