<template>
  <div class="container-main">
    <div class="categories">
      <div
          v-for="category in categories"
          :key="category.id"
          class="category">
        <a :href="'#'+category.name">
          {{ category.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const categories = ref({});

async function getCategories() {
  fetch("http://127.0.0.1:8000/api/categories/")
      .then(response => response.json())
      .then(data => {
        categories.value = data;
      });
}
onMounted(()=>{
  getCategories()
})

</script>

<style scoped lang="scss">
@import "@/mixin.scss";

.container-main {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
}

.categories {
  font-family: Comfortaa, cursive;
  @include myFlex();
  padding: 20px 30px;
  overflow-x: auto;
  gap: 30px;
  .category {
    min-height: 100px;
    font-size: 26px;
    @include myFlex();

    a {
      transition: color 0.2s;

      &:hover {
        color: #2DEB80;
      }
    }
  }
}
</style>