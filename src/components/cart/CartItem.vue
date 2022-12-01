<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="img-wrapper">
        <img
            class="product__img"
            src="@/assets/img/exampleSalad.jpg"
            alt="product"
        >
      </div>
      <div class="item__info">
        <div class="item_text">
          <h3>{{ props.product.name }}</h3>
          <p class="item__description">{{props.product.description}}</p>
        </div>
        <div class="item__buy-section">
          <p>{{props.product.price}}$ за одну штуку</p>
          <div class="item__counter">
            <CartItemCounter :product="props.product"/>
            <p class="item__total-price">Total {{cartStore.getProductPrice(props.product)}}$</p>
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <div class="option">
        <label
            class="label"
            for="cheese">Добавить ли сыр</label>
        <input
            type="checkbox"
            name="cheese"
            id="cheese">
      </div>
      <div class="option">
        <label class="label" for="bekon">Добавить ли бекон</label>
        <input type="checkbox" name="cheese" id="bekon">
      </div>
      <div class="option">
        <label class="label" for="banan">Добавить ли банан</label>
        <input type="checkbox" name="cheese" id="banan">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItemCounter from "@/components/cart/CartItemCounter.vue";
import {ICartProduct} from "@/interfaces/ICartProduct";
import {useCartStore} from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps<{
  product:ICartProduct
}>();
console.log(props.product
)
</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.item-wrapper{
  @include myFlex($jc: center,$fd:column);
}
.options {
  font-family: Comfortaa, cursive;
  @include myFlex($ai: start, $jc: start);
  gap: 30px;

  .option {
    @include myFlex($ai: center, $jc: center);
    gap: 10px;
  }
}

.item {
  font-family: Comfortaa, cursive;
  @include myFlex($ai: start, $jc: start);
  gap: 50px;

  .img-wrapper {
    overflow: hidden;

    img {
      width: 320px;
      height: 250px;
      object-fit: contain;
    }
  }

  .item__info {
    @include myFlex($fd: column, $ai: start);
    min-height: 220px;
    max-width: 450px;

    .item_text {
      h3 {
        font-size: 26px;
        margin-bottom: 20px;
      }
    }

    .item__buy-section {
      width: 100%;
      @include myFlex($fd: column, $ai: start);
      gap: 20px;

      .item__counter {
        width: 100%;
        @include myFlex();
      }
    }
  }
}
</style>
