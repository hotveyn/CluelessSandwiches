<template>
  <div class="product">
    <div class="product__view">
      <RouterLink
          class="rt-link"
          :to="'/product/'+props.product.id"
      >
        <img
            src="@/assets/img/exampleSandwich.jpg"
            alt="product">
      </RouterLink>
      <ToCartButton class="add-to-cart"/>
    </div>
    <h3>{{props.product.name}}</h3>
    <p class="price">{{props.product.price}}$</p>
  </div>
</template>

<script setup lang="ts">
import ToCartButton from "@/components/ToCartButton.vue";
import IProduct from "@/interfaces/IProduct";

const props = defineProps<{
  product: IProduct
}>();

</script>

<style scoped lang="scss">
@import "@/mixin.scss";

.product {
  @include myFlex($fd: column);
  font-family: Comfortaa, cursive;
  width: 350px;
  max-height: 280px;
  gap: 10px;

  h3{
    font-size: 20px;

  }

  .price{
    color: #2DEB80;
    font-size: 32px;
  }
  .product__view {
    position: relative;
    overflow: hidden;

    .add-to-cart {
      position: absolute;
      right: 15%;
      bottom: 10%;
    }

    img {
      width: 350px;
      height: 250px;
      object-fit: contain;
    }
  }
}
</style>
