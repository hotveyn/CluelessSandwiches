
<template>

  <div class="log-reg">
    <TheLogin/>
    <TheRegister/>
  </div>
</template>

<script setup lang="ts">
import TheLogin from "@/components/profile/TheLogin.vue"
import TheRegister from "@/components/profile/TheRegister.vue"

</script>

<style scoped lang="scss">
@import "@/mixin.scss";


.log-reg{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 80px;
  background-color: white;
  border: none;
  border-radius: 20px;
  //max-width: 800px;
  //width: 100%;
  width: 900px;
  min-height: 50vh;
  gap: 90px;
}
</style>