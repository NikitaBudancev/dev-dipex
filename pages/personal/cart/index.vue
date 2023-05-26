<template>
  <div class="flex flex-col gap-5">
    <div class="bg-white px-5 py-8 rounded-lg shadow-sm">
      <div class="flex items-center gap-6 justify-end">
        <div class="text-lg">Итого:</div>
        <div class="text-2xl font-semibold">5.84 €</div>
        <div>
          <NuxtLink class="btn py-3" to="/personal/order/make/">Оформить заказ</NuxtLink>
        </div>
      </div>
    </div>
    <div class="bg-white px-5 py-5 rounded-lg shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex-1 max-w-xs">
          <label for="input-group-search" class="sr-only">Фильтр</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Фильтр"
            />
          </div>
        </div>
        <div class="font-semibold">В корзине 4 товара</div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="bg-white px-5 py-4 rounded-lg shadow-sm"
        v-for="n in 5"
        :key="n"
      >
        <div class="flex items-center justify-between">
          <div class="max-w-[100px]">
            <img
              src="https://digital-assets.tecalliance.services/images/800/06db10283256b77b448fa34ffb371b05bb1fa538.jpg"
              alt=""
            />
          </div>
          <div class="flex-1 px-5">
            <NuxtLink
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to="/catalog/rezerves-dalas/exhaust-system/cxcx072/"
              >Шланг, вентиляция картера TRUCKTEC AUTOMOTIVE 02.14.037</NuxtLink
            >
          </div>
          <div>
            <BaseCounterBasket />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
