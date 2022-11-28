<template>

  <div class="products__section" :id="props.categoryName">
    <div class="container-main">
      <h2>{{ props.categoryName }}</h2>
      <div class="products">
        <ProductItem
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "@/components/ProductItem.vue";
import {onMounted, ref} from "vue";

const props = defineProps<{
  categoryName: string,
  categoryId: number
}>();

let products = ref({});

async function getProductsByCategory() {
  fetch(`http://127.0.0.1:8000/api/categories/${props.categoryId}/product`)
      .then(response => response.json())
      .then(data => {
        products.value = data;
      });
}
onMounted(()=>{
  getProductsByCategory();
})
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
  width: 1300px;
  margin: 0 auto;
  background-color: white;
  min-height: 300px;
  border-radius: 15px;
  padding: 30px;

  h2 {
    margin-left: 70px;
    font-size: 32px;
    font-family: Comfortaa, cursive;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>