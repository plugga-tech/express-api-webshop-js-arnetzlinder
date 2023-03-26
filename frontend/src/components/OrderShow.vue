<script lang="ts">
export default {
    name: 'OrderShow',
    props: ['orderData'],
    data() {
        return {
        };
    },
    
};
</script>

<template>
    <div class="show-orders"> Dina ordrar:
     <h2 v-html="orderData._id" class="product-name"></h2>

        <!-- <img v-bind:src="'/public/images/' + orderData._id + '.jpeg'" class="productImage">

        <p class="description"> Beskrivning:</p>
        <p v-html="orderData.description" class="product-desc"></p>
        <p v-html="orderData.price" class="product-price"></p><span> kr</span>
        <p v-html="orderData.lager" class="product-lager"></p> -->
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