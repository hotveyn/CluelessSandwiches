<template>
  <TheCategories/>
  <TheSections/>
</template>

<script setup lang="ts">
import TheCategories from "@/components/main/TheCategories.vue";
import TheSections from "@/components/main/TheSections.vue";

</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.sections_loading {
  font-family: 'Comfortaa', cursive;
  @include myFlex($jc: center);
  min-height: 500px;

  .sections-loading__title {
    font-size: 30px;
    color: #858585;
  }

}
</style>
