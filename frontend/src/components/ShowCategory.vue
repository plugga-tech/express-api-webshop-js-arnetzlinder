<script lang="ts">
export default {
    name: 'ShowCategory',
    props: ['categoryData'],
    data() {
        return {
        };
    },
    emits: ['myevent', 'click'],
    
    
};


</script>


<template>
    <!-- <div class="show-category"> -->
     <button @click="$emit('click', categoryData._id)" class="category-name"> {{ categoryData.name  }}</button>

        <!-- <img v-bind:src="'/public/images/' + orderData._id + '.jpeg'" class="productImage">

        <p class="description"> Beskrivning:</p>
        <p v-html="orderData.description" class="product-desc"></p>
        <p v-html="orderData.price" class="product-price"></p><span> kr</span>
        <p v-html="orderData.lager" class="product-lager"></p> -->
    <!-- </div> -->
</template>

<style>
.show-category {
    display: flex;
    flex-direction: row;
}
.category-name {
    width: 9rem;
    height: 30px;
    margin: 1rem;
    font-size: 1rem;
}

</style>