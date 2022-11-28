<template>
  <header>
    <div class="container-header">
      <router-link
          class="rt-link"
          :to="{name: 'home'}"
      >
        <h1>ClueLess Sandwiches</h1>
      </router-link>
      <ul class="links">

      </ul>
      <div class="header__buttons">
        <router-link :to="{name:'cart'}">
          <button>
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
            <span class="button__text">Корзина</span>
          </button>
        </router-link>
        <router-link :to="{name:'profile'}">
          <button>
            <span class="material-symbols-outlined">
              person
            </span>
            <span class="button__text">Войти</span>
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/mixin.scss";

header {
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  height: 100px;
}

.container-header {
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    font-size: 30px;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
  }

  button {
    padding: 5px 10px;
    background-color: white;
    border: 2px solid white;
    border-radius: 10px;
    @include myFlex();
    font-size: 22px;
    gap: 7px;
    font-family: 'Comfortaa', cursive;
    cursor: pointer;

    .material-symbols-outlined {
      font-size: 30px;
    }

    span {
      background: -webkit-linear-gradient(248.99deg, #33E7BB -37.47%, #1FEE7E 132.11%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .header__buttons{
    display: flex;
    gap: 20px;
  }
}
</style>
