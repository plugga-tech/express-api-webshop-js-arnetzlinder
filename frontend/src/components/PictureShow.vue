<script lang="ts">


export default {
    name: 'PictureShow',
    props: ['pictureData'],
    data() {
        return {

        };
    },
};

//Array.find(id:t jag letar efter)
</script>

<template>
  
    <div class="show-pictures">
          <img :src="pictureData.img[0]">
    </div>
</template>

<style scoped>
    .show-pictures {
        margin: 1rem;
        

    }
</style>