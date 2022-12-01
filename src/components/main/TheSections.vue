<template>
  <div class="sections">
      <loading v-if="isLoading"
          :active="isLoading"
          color="#2DEB80"
          :is-full-page="false"
      />
      <!--  Секции категории-->
      <SectionItem v-else
          v-for="(category, index) in categories"
          :key="index"
          :category-name="category.name"
          :category-id="category.id"
      />
  </div>
</template>

<script setup lang="ts">
import SectionItem from "@/components/main/SectionItem.vue";
import {onMounted, Ref, ref} from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const categories = ref();
let isLoading: Ref<boolean> = ref(true);

async function getCategories() {
  fetch("http://127.0.0.1:8000/api/categories/")
      .then(response => response.json())
      .then(data => {
        categories.value = data;
        isLoading.value = false;
      });
}

onMounted(() => {
  getCategories();
});
</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.sections-loading__title {
  font-family: 'Comfortaa', cursive;
  font-size: 30px;
  color: white;
}

.sections {
  min-height: 70vh;
}
</style>
