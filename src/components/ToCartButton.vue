<template>
  <button
      @click="addToCart"
      class="add-to-cart"
      :class="{'bought': disabled}"
  >
    <span
        class="material-symbols-outlined"
    >
      add
    </span>
    <span class="add-to-cart__text">
      <slot/>
    </span>
  </button>
</template>

<script setup lang="ts">
import {ICartProduct} from "@/interfaces/ICartProduct";
import IOption from "@/interfaces/IOption";
import IProduct from "@/interfaces/IProduct";
import {ref} from "vue";
import {useCartStore} from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps<{
  product: IProduct
  options: IOption[]
}>();

const disabled = ref(false);
// Start animation function
function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 300);
}

function addToCart() {
  let product: ICartProduct = Object.assign({}, {count: 1}, props.product);
  product.options = props.options;
  cartStore.addNewProduct(product);
  warnDisabled();
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.add-to-cart {
  @include myFlex($jc: center);
  min-width: 40px;
  min-height: 40px;
  border-radius: 15px;
  cursor: pointer;
  border: white;
  align-self: end;
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  padding: 10px;

  span {
    color: white;
    font-size: 30px;
  }

  .add-to-cart__text {
    font-size: 18px;
    color: white;
  }
}

.bought {
  animation: bought-cart 0.3s;
}

@keyframes bought-cart {

  10%, 90% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.05, 1.05);
  }
}
</style>
