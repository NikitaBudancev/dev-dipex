<template>
  <div class="bg-white p-5 rounded-lg shadow-sm">
    <div class="mb-5">
      <NuxtLink
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to="/personal/orders/"
        >Посмотреть текущие заказы</NuxtLink
      >
    </div>
    <div class="text-xl mb-3">Заказы в статусе «Принят»</div>
    <div class="flex flex-col gap-5">
      <div
        v-for="n in 5"
        :key="n"
        class="border border-gray-300 overflow-hidden pb-3 rounded shadow-md"
      >
        <div class="px-5 py-2 bg-lime-200 font-semibold">
          Заказ №89179 от 04.05.2023, 4 товара на сумму 19.21 €
        </div>
        <div class="px-5">
          <div>
            <div
              class="flex items-center gap-3 py-2 text-sm font-semibold text-gray-600"
            >
              <span>ОПЛАТА</span>
              <div class="h-px w-full bg-gray-300"></div>
            </div>
            <div class="flex gap-32 items-center">
              <div>
                <div class="font-semibold">
                  Счет №89179/1 от 04.05.2023, Bankas karte (internetā)
                </div>
                <div class="py-3">
                  <span
                    class="text-red-600 font-semibold py-1 px-2 bg-red-200 border border-red-300 rounded-md"
                    >Не оплачено</span
                  >
                </div>
                <div>
                  Сумма к оплате по счету:
                  <span class="font-semibold">19.21 €</span>
                </div>
                <div class="mt-2">
                  <button
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Сменить способ оплаты
                  </button>
                </div>
              </div>
              <div class="">
                <button
                  type="button"
                  class="py-2 px-4 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600"
                >
                  Оплатить
                </button>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <div
              class="flex items-center gap-3 py-2 text-sm font-semibold text-gray-600"
            >
              <span>ДОСТАВКА</span>
              <div class="h-px w-full bg-gray-300"></div>
            </div>
            <div>
              <div class="font-semibold">
                Отгрузка №89179/2, стоимость доставки 1.99 €
              </div>
              <div class="py-3">
                <span
                  class="text-red-600 font-semibold py-1 px-2 bg-red-200 border border-red-300 rounded-md"
                  >Не отгружено</span
                >
              </div>
            </div>
            <div class="flex gap-4 items-center mb-3">
              <div>Статус отгрузки:</div>
              <div
                class="text-gray-500 font-semibold py-1 px-2 bg-gray-100 border border-gray-300 rounded-md"
              >
                Окончание обработки
              </div>
            </div>
            <div>
              Служба доставки:
              <span class="font-semibold">DPD paku skapis</span>
            </div>
            <div class="mt-2 mb-3">
              <NuxtLink
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                to="/personal/orders/123213/"
                >Подробнее о заказе</NuxtLink
              >
            </div>
            <div class="mt-5">
              <button
                class="font-medium text-gray-600 dark:text-gray-500 hover:underline"
              >
                Отменить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
