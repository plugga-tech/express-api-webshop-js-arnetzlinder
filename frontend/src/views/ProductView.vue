<script lang="ts">
import ProductShow from '@/components/ProductShow.vue';
import ShowCategory from '@/components/ShowCategory.vue';
import { reactive } from 'vue';
// import { onMounted } from 'vue';

const state = reactive({
    products: [],
    categories: []
});

// const stat = reactive ({
//     categories: []
// });


// fetch("http://localhost:3000/api/products", {credentials: 'include'})
// .then((response) => response.json())
// .then((data) => { 
//     console.log(data)
//     state.products = data;
//        //console.log(products)
//     });

// fetch("http://localhost:3000/api/categories")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     stat.categories = data;
// });

// function filterProducts(event: Event, productId: String) {
//     //event.preventDefault();
//     console.log("Filtering products!")
//     fetch("http://localhost:3000/api/products/category/" + productId, {credentials: 'include'})
// .then((response) => response.json())
// .then((data) => { 
//     console.log(data)
//     state.products = data;
//        //console.log(products)
//     });

// }

export default {
    name: 'ProductView',
    components: {
    ProductShow,
    ShowCategory,
    },
    props: [],
    data() {
        return {
            state: reactive ({
                categories: [],
                products: []
            }),
            productId: ""
            
        };
    },
    methods: {
        filterProducts(productId: String) {
        //event.preventDefault();
        console.log("Filtering products!")
        fetch("http://localhost:3000/api/products/category/" + productId, {credentials: 'include'})
            .then((response) => response.json())
            .then((data) => { 
        console.log(data)
        state.products = data;
       //console.log(products)
        });
        }
    },
    beforeMount () {
        fetch("http://localhost:3000/api/products", {credentials: 'include'})
.then((response) => response.json())
.then((data) => { 
    console.log(data)
    this.state.products = data;
       //console.log(products)
    });

fetch("http://localhost:3000/api/categories")
.then((response) => response.json())
.then((data) => {
    console.log(data);
    this.state.categories = data;
});


    }


}



</script>

<template>
    <div class="product-view" :onMyevent="filterProducts">
        <ShowCategory v-for="(category, index) in state.categories" :category-data="category" :key="index" v-bind:on-click="filterProducts" :inheritAttrs="false"/>
        <ProductShow v-for="(product, index) in state.products" :product-data="product" :key="index" />
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

</style>