<template>

  <main>
    <!--  Если юзер не авторизован-->
    <div class="main-container">
      <LogReg/>
    </div>
  </main>
</template>

<script setup lang="ts">
import LogReg from "@/components/profile/LogReg.vue";

</script>

<style scoped lang="scss">
@import "@/mixin.scss";

main {
  min-height: 80vh;
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  @include myFlex();

  .main-container{
    max-width: 1300px;
    margin: 0 auto;
  }
}
</style>