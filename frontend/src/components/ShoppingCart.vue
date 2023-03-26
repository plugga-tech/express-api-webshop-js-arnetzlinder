<template>
  <div>
    <h2>Kundvagn</h2>
    <ul>
      <li v-for="product2 in cart" :key="product2.id">
        {{ product2.name }} - meh {{ product2.price }}
      </li>
    </ul>
    <button >Beställ</button>
  </div>
</template>

<script lang="ts">


export default {
  name: "ShoppingCart",
  props: ['cart'],
  data() {
    return {
      
    };
  },
  onMounted() {
      console.log(this.cart)
  },
  methods: {

  },

};

</script>
