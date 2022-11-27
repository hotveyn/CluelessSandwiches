<template>
  <TheHeader/>
  <main class="page">
      <slot/>
  </main>
  <TheFooter/>
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";

</script>

<style scoped lang="scss">
.page-container{
}
</style>
