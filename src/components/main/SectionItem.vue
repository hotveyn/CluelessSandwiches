<template>

  <div class="products__section" :id="props.categoryName">
    <div class="container-main">
      <template v-if="isLoading">
        <loading
            :active="isLoading"
            color="#2DEB80"
            :is-full-page="false"
        />
      </template>
      <template v-else>
        <h2>{{ props.categoryName }}</h2>
        <div class="products">
          <!--        Продукты которые находятся в этой категории-->
          <ProductItem
              v-for="product in products"
              :key="product.id"
              :product="product"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "@/components/ProductItem.vue";
import {onMounted, Ref, ref} from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const props = defineProps<{
  categoryName: string,
  categoryId: number
}>();

let products = ref();
let isLoading: Ref<boolean> = ref(true);

async function getProductsByCategory() {
  fetch(`http://127.0.0.1:8000/api/categories/${props.categoryId}/product`)
      .then(response => response.json())
      .then(data => {
        products.value = data;
        isLoading.value = false;
      });
}

onMounted(() => {
  getProductsByCategory();
});
</script>

<style scoped lang="scss">
@import "@/mixin.scss";

.products__section {
  width: 100%;
  min-height: 300px;
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  padding: 30px;
}

.container-main {
  font-family: Comfortaa, cursive;
  width: 1300px;
  margin: 0 auto;
  background-color: white;
  min-height: 300px;
  border-radius: 15px;
  padding: 30px;

  .section-loading__title{
    font-size: 30px;
  }
  h2 {
    margin-left: 70px;
    font-size: 32px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
