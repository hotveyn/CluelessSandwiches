<template>
  <div class="counter-button">
    <button class="plus">
    <span class="material-symbols-outlined">
      add
    </span>
    </button>
    <p>{{props.product.count}}</p>
    <button class="minus">
    <span class="material-symbols-outlined">
      remove
    </span>
    </button>
  </div>
</template>

<script setup lang="ts">

import {ICartProduct} from "@/interfaces/ICartProduct";

const props = defineProps<{
  product: ICartProduct;
}>();

</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.counter-button {
  @include myFlex($jc: center);
  transform: scale(1.2, 1.2);
  box-sizing: border-box;
  width: 90px;
  overflow: hidden;
  border: none;
  border-radius: 15px;

  button, p {
    width: 30px;
    @include myFlex($jc: center);
  }

  button {
    background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
    border: none;
    cursor: pointer;
    color: white;
  }

  p {
    font-family: Comfortaa, cursive;
  }
}
</style>
