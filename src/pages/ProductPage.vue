<template>


  <div class="product-wrapper">
    <div class="product__container">
      <div class="product">
        <loading
            v-if="isLoading"
            :active="isLoading"
            color="#2DEB80"
            :is-full-page="false"
        />
        <template v-else>
          <img
              src="@/assets/img/exampleTvorog.png"
              alt="product"
          >
          <div class="product__info">
            <div class="product__names">
              <h2 class="product__name">
                {{ product.name }} - {{ product.category.name }}
              </h2>
              <p class="product__description">
                {{ product.description }}
              </p>
            </div>
            <div class="product__options">
              <div
                  v-for="option in product.options"
                  class="product__option"
              >
                <input
                    class="custom-checkbox"
                    v-model="options"
                    type="checkbox"
                    :id="option.name"
                    :value="option"
                />
                <label :for="option.name">
                  {{ option.name }}
                </label>
              </div>
            </div>
            <ToCartButton
                :options="options"
                :product="product"
            >
              Добавить в корзину
            </ToCartButton>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IOption from "@/interfaces/IOption";
import {onMounted, Ref, ref} from "vue";
import {useRoute} from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import ToCartButton from "@/components/ToCartButton.vue";

const route = useRoute();
let product = ref();

let isLoading: Ref<boolean> = ref(true);
let options: Ref<IOption[]> = ref([]);


async function getProduct() {
  fetch(`http://127.0.0.1:8000/api/product/${route.params.id}`)
      .then(response => response.json())
      .then((data) => {
        product.value = data;
        isLoading.value = false;
      });
}

onMounted(() => {
  getProduct();
});

</script>

<style scoped lang="scss">
@import "@/assets/css/mixin.scss";

.product-wrapper {
  background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
  min-height: 70vh;

  @include myFlex($jc: center);
}

.product__container {
  max-width: 830px;

  .product__loading {
    width: 100%;
    @include myFlex($jc: center);
  }

  .product {
    @include myFlex($ai: center, $jc: start);
    position: relative;
    min-height: 400px;
    min-width: 860px;
    background-color: white;
    padding: 30px 20px;
    border-radius: 15px;
    gap: 30px;
    font-family: Comfortaa, cursive;

    .product-loading__title {
      font-size: 30px;
    }

    img {
      align-self: center;
      width: 350px;
      height: 250px;
      object-fit: cover;
    }

    .product__info {
      @include myFlex($ai: start, $fd: column);
      gap: 50px;

      .product__name {
        margin-bottom: 20px;
        font-size: 30px;
      }

      .product__options {
        @include myFlex();
        width: 100%;

        .product__option {
          .custom-checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;

            & + label {
              @include myFlex();
              padding: 5px 10px;
              border-radius: 10px;
              border: none;
              background: linear-gradient(248.99deg, #38E6EB -37.47%, #2DEB80 132.11%);
              color: white;
              cursor: pointer;
              user-select: none;
            }

            & + label::before {
              content: '';
              display: inline-block;
              width: 1em;
              height: 1em;
              flex-shrink: 0;
              flex-grow: 0;
              border: 2px solid white;
              border-radius: 50%;
              margin-right: 0.5em;
              background-repeat: no-repeat;
              background-position: center center;
              background-size: 50% 50%;
            }

            &:checked + label::before {
              border-color: white;
              background: white;
            }
          }
        }
      }
    }
  }
}

</style>
