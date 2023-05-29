<template>
  <div class="bg-white p-5 rounded-lg shadow-sm">
    <div class="mb-5">
      <NuxtLink
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to="/personal/orders/history/"
        >Посмотреть историю заказов</NuxtLink
      >
    </div>
    <div class="text-xl mb-3">Заказы в статусе «Принят»</div>
    <div class="flex flex-col gap-5">
      <div
        v-for="n in 5"
        :key="n"
        class="border border-gray-200 overflow-hidden pb-4 rounded shadow-md bg-[#f9f9f9]"
      >
        <div class="px-5 py-2 bg-lime-200 font-semibold">
          Заказ №89179 от 04.05.2023, 4 товара на сумму 19.21 €
        </div>
        <div class="flex gap-4 px-4 pt-4">
          <div
            class="bg-white rounded-lg flex-1 shadow-sm px-6 py-3 hover:shadow"
          >
            <div
              class="flex items-center gap-3 py-2 mb-2 text-sm font-semibold text-gray-600"
            >
              <span>ОПЛАТА</span>
              <div class="h-px w-full bg-gray-300"></div>
            </div>
            <div class="">
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

                  <div class="pt-4 pl-4">
                    <ul class="flex flex-col gap-3">
                      <li v-for="n in 2" :key="n">
                        <input
                          :id="`small2-${n}`"
                          type="radio"
                          name="test"
                          value=""
                          class="hidden peer"
                        />
                        <label
                          :for="`small2-${n}`"
                          class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <div class="flex items-center justify-between w-full">
                            <div class="flex items-center gap-5">
                              <div class="w-10">
                                <img
                                  src="https://dipex.lv/upload/sale/paysystem/logotip/1bd/1bd47c8067b352c6ff7f9a5485449ef6.jpg"
                                  alt=""
                                />
                              </div>
                              <div>Банковской картой (Онлайн Оплата)</div>
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <button
                  type="button"
                  class="py-2 px-8 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600"
                >
                  Оплатить
                </button>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-lg flex-1 shadow-sm px-6 py-3 hover:shadow"
          >
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
                class="font-medium text-red-600 dark:text-gray-500 hover:underline"
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
