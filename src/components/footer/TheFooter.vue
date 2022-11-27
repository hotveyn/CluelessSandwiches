<template>

  <footer>
    <ul>
      <li
          v-for="(value,link) in link"
      >
        <RouterLink :to="{name:link}">
          {{ value }}
        </RouterLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">

const link = {home: "Home", catalog: "Catalog"};
</script>

<style scoped>

</style>
