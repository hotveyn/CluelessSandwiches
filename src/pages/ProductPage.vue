<template>

  <div class="product">
    <div class="product__container">
      <div class="img-wrapper">
        <img src="@/assets/img/exampleTvorog.png" alt="product">
      </div>
      <div class="product__info">
        <h2>
          {{ product.name }} - {{ product.category.name }}
        </h2>
        <p class="product__description">
          {{product.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

let product = ref({});

async function getProduct() {
  fetch(`http://127.0.0.1:8000/api/product/${route.params.id}`)
      .then(response => response.json())
      .then((data) => {
        product.value = data;
        console.log(product.value)
      });
}

onMounted(()=>{
  getProduct();
})

</script>

<style scoped lang="scss">
@import "@/mixin.scss";

.product__container {
  @include myFlex($ai: start, $jc: start);
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  gap: 30px;
  font-family: Comfortaa, cursive;

  img {
    width: 350px;
    height: 250px;
    object-fit: cover;
  }

  .product__info {
    @include myFlex($ai:start, $fd: column);

    h2 {
      margin-bottom: 20px;
      font-size: 30px;
    }
  }
}

.product {
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  min-height: 70vh;
}
</style>