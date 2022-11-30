<template>


  <div class="product-wrapper">
    <div class="product__container">
      <div class="product">
        <template v-if="isLoading">
          <loading
              :active="isLoading"
              color="#2DEB80"
              :is-full-page="false"
          />
        </template>
        <template v-else>
          <img
              src="@/assets/img/exampleTvorog.png"
              alt="product"
          >
          <div class="product__info">
            <h2 class="product__name">
              {{ product.name }} - {{ product.category.name }}
            </h2>
            <p class="product__description">
              {{ product.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {useRoute} from "vue-router";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


const route = useRoute();

let product = ref();
let isLoading:Ref<boolean> = ref(true);

async function getProduct() {
  fetch(`http://127.0.0.1:8000/api/product/${route.params.id}`)
      .then(response => response.json())
      .then((data) => {
        product.value = data;
        console.log(product.value)
        isLoading.value = false;
      });
}

onMounted(() => {
  getProduct();
});

</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.product-wrapper {
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  min-height: 70vh;

  @include myFlex($jc: center);
}

.product__container {
  max-width: 830px;

  .product__loading{
    width: 100%;
    @include myFlex($jc:center);
  }
  .product {
    @include myFlex($ai: start, $jc: start);
    position: relative;
    min-height: 400px;
    min-width: 860px;
    background-color: white;
    padding: 50px 20px;
    border-radius: 15px;
    gap: 30px;
    font-family: Comfortaa, cursive;

    .product-loading__title{
      font-size: 30px;
    }
    img {
      align-self: center;
      width: 350px;
      height: 250px;
      object-fit: cover;
    }

    .product__info {
      @include myFlex($ai: start, $fd: column);

      .product__name {
        margin-bottom: 20px;
        font-size: 30px;
      }
    }
  }
}

</style>
