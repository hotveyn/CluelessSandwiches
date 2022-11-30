<template>

  <div class="log">
    <h2>Войти</h2>
    <form>
      <input type="number" id="login" class="phone" placeholder="Телефон">
      <input type="password" id="password" class="password" placeholder="Пароль">
      <button type="submit">Авторизоваться</button>
    </form>
  </div>
</template>

<script lang="ts">


</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.log {
  @include myFlex($jc:space-between,$ai:start, $fd:column);
  gap: 70px;
  h2{
    font-family: Comfortaa, cursive;
    font-size: 26px;
  }
  form{
    @include myFlex($fd:column);
    gap: 10px;
    width: 100%;

    input{
      width: 100%;
      padding: 10px 15px;
      font-size: 18px;
      border: 1px solid #858585;
      outline: none;
      border-radius: 5px;
      box-sizing: border-box;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    button{
      width: 100%;
      height: 50px;
      margin-top: 30px;
      background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 20px;
      color: white;
    }
  }
}
</style>
