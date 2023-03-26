<template>
    <div>
      <div class="row">
        <div class="col-md-3">
          <ul>
            <li v-for="product2 in state.cart" :key="product2.id">
                {{ product2.name }} - {{ product2.amount }} st, à {{ product2.price }} kr
            </li>
          </ul>
          <button class="orderBtn" @click="sendOrder"> Beställ</button>


          <!-- <shopping-cart cart="state.cart"></shopping-cart> -->
        </div>
        <div class="col-md-9">
          <show-category
            v-for="category in state.categories"
            :key="category._id"
            :category-data="category"
            @click="filterProducts(category._id)">
        </show-category>
          <div class="row">
            <product-show
              v-for="product in state.products"
              :key="product._id"
              :product-data="product"
              :id="product._id"
              @add-to-cart="addToCart(product._id)">
            </product-show>

          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script lang="ts">
  import ProductShow from '../components/ProductShow.vue';
  import ShowCategory from '../components/ShowCategory.vue';
  //import ShoppingCart from '../components/ShoppingCart.vue';
  import { reactive } from 'vue';

  interface CartItem {
    id: string | undefined,
    name: string | undefined,
    price: number | undefined,
    amount: number
  }

  interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  }

  interface Category {
  _id: string;
  name: string;
  }
  
  export default {
    name: 'ProductView',
    components: {
      ProductShow,
      ShowCategory,
      // ShoppingCart
    },
    props: [],
    data() {
      return {
        state: reactive({
          categories: [] as Category[],
          products: [] as Product[],
          cart: [] as CartItem[]
        }),
        productId: ''
      };
    },
    methods: {
      filterProducts(categoryId: string) {
        console.log("Filtered on "+categoryId)
        fetch('http://localhost:3000/api/products/category/' + categoryId, {
          credentials: 'include'
        })
          .then((response) => response.json())
          .then((data) => {
            this.state.products = data;
            console.log(data);
          });
      },
      addToCart(product: String) {

        //console.log(product)
        let productContent = this.state.products.find((p: Product) => p._id === product);
        let cartContent = this.state.cart.find((p: CartItem) => p.id === product) as CartItem;

        console.log("cartcontent" + cartContent)

        if (typeof cartContent === 'undefined') {

        //console.log(productContent);
        console.log("Product name: "+productContent?.name)
        this.state.cart.push({ id:  productContent?._id, 
                              name:  productContent?.name,
                              price: productContent?.price,
                              amount: 1
                            });
        } else {
            cartContent.amount++;
        
        }
        console.log(this.state.cart)
                            

      },
      sendOrder() {
        
        interface Order {
          products: {
          productId: string |undefined;
          quantity: number;
          }[];
        }

        let orderToSend: Order = {
          products: [],
        };
       
        this.state.cart.forEach(element => {
            console.log(element)
            orderToSend.products.push({
              productId: element.id,
              quantity: element.amount,


            })
        })

        fetch("http://localhost:3000/api/orders/add", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(orderToSend)
           })
           .then(res => res.json())
           .then(data => {
                console.log(data)
                // if (data.name) {
                //     this.userGreeting = "Godmorgon " + data.name;
                //     localStorage.setItem("username", data.name);
                // }
                // else {
                //     //userGreeting.innerText = "Inloggning misslyckades, var vänlig och kontrollera användarnamn och lösenord."
                // }
                })
                this.state.cart = [];
                window.alert("Tack för att du provade min webbshop! Jag finns på github @arnetzlinder")
                    
      },
    },

    beforeMount() {
      Promise.all([
        fetch('http://localhost:3000/api/products', { credentials: 'include' }).then(
          (response) => response.json()
        ),
        fetch('http://localhost:3000/api/categories').then((response) =>
          response.json()
        )
      ]).then(([products, categories]) => {
        this.state.products = products;
        this.state.categories = categories;
      });
    }
  };
  </script>
  

<style scoped>
    h1 {
        margin: 2rem;
    }

    .orderBtn {
      width: 4rem;
      margin: 1rem;
      font-size: 1rem;
      margin-left: 2rem;
    }

</style>