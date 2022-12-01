<template>
  <main>
    <div class="main-container">
      <div class="items">
       <h2>Продукты в корзине</h2>
        <CartItem
          v-for="product in cartStore.productsInCart"
          :product="product"
        />
      </div>
      <CartBuy/>
    </div>
  </main>
</template>

<script setup lang="ts">
import CartItem from "@/components/cart/CartItem.vue"
import CartBuy from "@/components/cart/CartBuy.vue"
import {useCartStore} from "@/stores/cart";

const cartStore = useCartStore();

</script>

<style scoped lang="scss">

@import "@/assets/css/mixin.scss";

main {
  min-height: 80vh;
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);

  .main-container {
    max-width: 1300px;
    margin: 0 auto;
    @include myFlex($ai:start);
    gap: 30px;
    .items {
      @include myFlex($fd:column, $jc:center);
      gap: 50px;
      max-width: 900px;
      width: 100%;
      background-color: white;
      padding: 30px;
      border-radius: 15px;
      box-sizing: border-box;
      h2{
        font-family: Comfortaa, cursive;
        font-size: 26px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
