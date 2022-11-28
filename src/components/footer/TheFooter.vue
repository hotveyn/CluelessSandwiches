<template>

  <footer>
    <div class="footer-container">
      <h1>ClueLess Sandwiches</h1>
      <ul>
        <li
            v-for="(value,link) in link"
        >
          <RouterLink
              class="rt-link"
              :to="{name:link}"
          >
            {{ value }}
          </RouterLink>
        </li>
      </ul>
      <p class="copyright">@Copyright ByMe.INC</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

const link = {home: "Home", catalog: "Catalog", profile: "Profile"};
</script>

<style scoped lang="scss">
@import "@/mixin.scss";

footer {
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  min-height: 150px;
}

.footer-container {
  @include myFlex($fd: column);
  gap: 40px;
  max-width: 1300px;
  padding: 30px 0;
  margin: 0 auto;

  h1 {
    color: white;
    font-size: 25px;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
  }

  ul {
    @include myFlex();
    gap: 50px;

    .rt-link {
      font-size: 18px;
      font-family: Comfortaa, cursive;
      color: white;
    }

  }

  .copyright {
    color: white;
    font-size: 12px;
    font-family: 'Comfortaa', cursive;

  }

}
</style>
