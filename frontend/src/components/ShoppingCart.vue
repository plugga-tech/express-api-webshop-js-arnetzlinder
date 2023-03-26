<template>
  <div>
    <h2>Kundvagn</h2>
    <ul>
      <li v-for="product in cart" :key="product._id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <button @click="order()">Beställ</button>
  </div>
</template>

<script lang="ts">
  interface CartItem {
    id: string,
    name: string,
    price: number,
    image: string,
    amount: number
  }

export default {
  name: "ShoppingCart",
  props: ['cart'],
  data() {
    return {
      cartItems: [] as CartItem[],
      localStorage: window.localStorage,
    };
  },
  created() {
    let cartItems = this.localStorage.getItem("cartItems");
    if (cartItems !== null) {
      this.cartItems = JSON.parse(cartItems);
    }
  },
  methods: {
    addToCart(item: CartItem) {
      let foundItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if (foundItem) {
        foundItem.amount++;
      } else {
        this.cartItems.push({ ...item, amount: 1 });
      }
      this.localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    order() {
      this.cartItems = [];
      this.localStorage.removeItem("cartItems");
      console.log(this.cartItems);
    },
  },
  mounted() {
    if (this.$root) {
      const root = this.$root as any;
      if (root.$on) {
        root.$on("add-to-cart", (productData: any) => {
          this.addToCart(productData);
        });
      }
    }
  },
};

</script>
