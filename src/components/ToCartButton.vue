<template>
  <button
      @click="addToCart"
    class="add-to-cart"
  >
    <span class="material-symbols-outlined">
      add
    </span>
  </button>
</template>

<script setup lang="ts">

function addToCart(){

}
</script>

<style scoped lang="scss">
@import "@/mixin.scss";

.add-to-cart{
  @include myFlex($jc:center);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color:black;
  cursor: pointer;
  border: white;
  padding: 0;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 8%);
}
</style>