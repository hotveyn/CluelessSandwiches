<template>
  <div class="buy">
    <form action="http://127.0.0.1:8000/api/order/create">
      <p>Цена всех товаров - 60$</p>
      <button
          class="button-buy"
      >
        Оформить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.buy {
  max-width: 400px;
  width: 100%;
  background-color: white;
  padding: 30px;
  font-family: Comfortaa, cursive;
  font-weight: 600;

  button {
    margin-top: 30px;
    min-height: 50px;
    padding: 10px ;
    width: 100%;
    border: none;
    border-radius: 15px;
    font-size: 26px;
    color: white;
    background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
    cursor: pointer;

  }
}
</style>
