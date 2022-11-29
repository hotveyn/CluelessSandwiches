<template>
  <SectionItem
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category.name"
      :category-id="category.id"
  />
</template>

<script setup lang="ts">
import SectionItem from "@/components/main/SectionItem.vue"


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

</style>
