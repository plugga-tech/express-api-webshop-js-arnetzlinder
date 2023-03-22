<script lang="ts">
function printProducts() {
    fetch("http://localhost:3000/api/products")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

printProducts();

export default {};

</script>

<template>
    <div>
       <h1> Hej och hå</h1> 
    </div>
</template>

<style scoped>
    h1 {
        margin: 2rem;
    }
</style>