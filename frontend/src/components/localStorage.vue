<!-- <template>
    <div>
        <h2> Kundvagn</h2>
        <ul>
            <li v-for="product in cartItems" :key="product.id">
            {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface cartItems {
    id: number;
    name: string;
    price: number;
    amount: number;
}

@Component
export default class Kundvagn extends Vue {
    cartItems: CartItem[] = [];

        created(): void {
            let cartItems = localStorage.getItem('cartItems');
            if(cartItems) {
                this.cartItems = JSON.parse(cartItems);
            }
        }
    addToCart(item: CartItem): void {
        this.cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
}

</script> -->