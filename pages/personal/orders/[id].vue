<template>
  <div class="bg-white p-5 rounded-lg shadow-sm">
    <h1 class="text-3xl text-gray-700 mb-5">
      Мой заказ 89179, созданный на
      <span class="font-semibold">04.05.2023</span>
    </h1>
    <div class="mb-4">
      <NuxtLink
        class="font-medium text-blue-600 hover:text-blue-500"
        to="/personal/orders/"
      >
        ← вернуться к списку заказов</NuxtLink
      >
    </div>
    <div class="border border-gray-300 overflow-hidden pb-3 rounded shadow-md">
      <div class="px-5 py-2 bg-teal-500 font-semibold text-white">
        Заказ №89179 от 04.05.2023, 4 товара на сумму 19.21 €
      </div>
      <div>
        <div class="mt-4 px-5 py-2 font-semibold bg-gray-200">
          Информация о заказе
        </div>
        <div class="flex justify-between items-center px-5 py-3">
          <div>
            <div>полное имя:</div>
            <div class="font-semibold">Никита Иванов</div>
          </div>
          <div>
            <div>текущий статус по состоянию на 04.05.2023:</div>
            <div class="font-semibold">Принят</div>
          </div>
          <div>
            <div>всего:</div>
            <div class="font-semibold">19.21 €</div>
          </div>
          <div>
            <div>
              <button class="font-medium text-blue-600 hover:text-blue-500">
                Отмена
              </button>
            </div>
          </div>
        </div>
        <div class="px-5 py-3">
          <button class="font-medium text-blue-600 hover:text-blue-500">
            <span class="flex items-center">
              <span class="border-b border-blue-600 border-dashed"
                >Показать еще</span
              >
              <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#212B36"
                  fill-rule="evenodd"
                  d="M8.32811295,10.13086 L10.9843566,7.47461635 C11.1679576,7.29297997 11.1679576,6.99610187 10.9843566,6.81252 L10.5429591,6.37110336 C10.3613227,6.18752149 10.0644446,6.18752149 9.88084363,6.37110336 L7.99804706,8.253919 L6.11523142,6.37110336 C5.93359504,6.18752149 5.63671693,6.18752149 5.45311599,6.37110336 L5.01171842,6.81252 C4.82811748,6.99415637 4.82811748,7.29103448 5.01171842,7.47461635 L7.66796209,10.13086 C7.85156303,10.314461 8.14842207,10.314461 8.32811295,10.13086 Z"
                ></path></svg
            ></span>
          </button>
        </div>
      </div>
      <div>
        <div class="mt-4 px-5 py-2 font-semibold bg-gray-200">
          Доставка и оплата
        </div>
        <div class="mt-4 px-5">
          <div class="flex items-center gap-4 pb-5">
            <img src="/images/icons/personal/file-lock.svg" alt="" />
            <div>
              <div class="font-semibold">
                Заказ 89179 created on 04.05.2023, Принят
              </div>
              <div>
                Сумма заказа: <span class="font-semibold">19.21 €</span>
              </div>
            </div>
          </div>
          <div class="flex gap-32 style-line px-10 py-5">
            <div class="flex items-start gap-4">
              <img
                src="/images/icons/personal/file-pen.jpg"
                alt=""
                width="46"
                height="54"
              />
              <div class="max-w-[500px]">
                <div class="font-semibold">
                  Счет-фактура нет.89179/1 из 04.05.2023, Bankas pārskaitījums
                  (priekšapmaksas rēķins)
                  <span
                    class="inline-block text-red-600 font-semibold py-1 px-2 bg-red-200 border border-red-300 rounded-md"
                    >Не оплачено</span
                  >
                </div>
                <div>
                  Сумма счета: <span class="font-semibold">19.21 €</span>
                </div>
                <div class="py-3">
                  <button class="font-medium text-blue-600 hover:text-blue-500">
                    <span class="flex items-center">
                      <span class="border-b border-blue-600 border-dashed"
                        >Изменить способ оплаты</span
                      >
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#212B36"
                          fill-rule="evenodd"
                          d="M8.32811295,10.13086 L10.9843566,7.47461635 C11.1679576,7.29297997 11.1679576,6.99610187 10.9843566,6.81252 L10.5429591,6.37110336 C10.3613227,6.18752149 10.0644446,6.18752149 9.88084363,6.37110336 L7.99804706,8.253919 L6.11523142,6.37110336 C5.93359504,6.18752149 5.63671693,6.18752149 5.45311599,6.37110336 L5.01171842,6.81252 C4.82811748,6.99415637 4.82811748,7.29103448 5.01171842,7.47461635 L7.66796209,10.13086 C7.85156303,10.314461 8.14842207,10.314461 8.32811295,10.13086 Z"
                        ></path></svg
                    ></span>
                  </button>
                </div>
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
      </div>
      <div>
        <div class="mt-4 px-5 py-2 font-semibold bg-gray-200">
          Параметры отгрузки
        </div>
        <div class="flex gap-10 px-5 py-3">
          <div>
            <img
              src="https://dipex.lv/upload/sale/delivery/logotip/ebf/ebfe4a225cd74bf8e01536de87be3344.png"
              alt=""
            />
          </div>
          <div>
            <div class="font-semibold">
              Отгрузка нет.89179/2, доставка всего 1.99 €
            </div>
            <div>
              служба доставки:
              <span class="font-semibold">DPD paku skapis</span>
            </div>
            <div class="flex gap-4 items-center mb-3">
              <div>Статус отгрузки:</div>
              <div
                class="text-gray-500 font-semibold py-1 px-2 bg-gray-100 border border-gray-300 rounded-md inline-block"
              >
                Окончание обработки
              </div>
            </div>
            <div class="py-3">
              <button class="font-medium text-blue-600 hover:text-blue-500">
                <span class="flex items-center">
                  <span class="border-b border-blue-600 border-dashed"
                    >Показать еще</span
                  >
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212B36"
                      fill-rule="evenodd"
                      d="M8.32811295,10.13086 L10.9843566,7.47461635 C11.1679576,7.29297997 11.1679576,6.99610187 10.9843566,6.81252 L10.5429591,6.37110336 C10.3613227,6.18752149 10.0644446,6.18752149 9.88084363,6.37110336 L7.99804706,8.253919 L6.11523142,6.37110336 C5.93359504,6.18752149 5.63671693,6.18752149 5.45311599,6.37110336 L5.01171842,6.81252 C4.82811748,6.99415637 4.82811748,7.29103448 5.01171842,7.47461635 L7.66796209,10.13086 C7.85156303,10.314461 8.14842207,10.314461 8.32811295,10.13086 Z"
                    ></path></svg
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-4 px-5 py-2 font-semibold bg-gray-200">
          Элементы заказа
        </div>
        <div class="mt-4 px-5">
          <div>
            <div class="flex justify-between border-b">
              <div class="flex flex-1 px-5 py-2">Название</div>
              <div class="flex justify-end w-40 py-2">Цена</div>
              <div class="flex justify-end w-40 py-2">Количество</div>
              <div class="flex justify-end w-40 py-2">Всего</div>
            </div>
            <div v-for="n in 5" :key="n" class="flex justify-between border-b">
              <div class="flex-1 px-5 py-2">
                <NuxtLink
                  class="flex items-center gap-5 font-medium text-blue-600 hover:text-blue-500"
                  to="/catalog/rezerves-dalas/exhaust-system/vagwht003261/"
                >
                  <img
                    class="w-16"
                    src="https://digital-assets.tecalliance.services/images/800/ccc9b49bde7eae33db4c38414823130169778858.jpg"
                    alt=""
                  />
                  <span
                    >Сигнализатор, износ тормозных колодок ATE
                    24.8190-0401.2</span
                  >
                </NuxtLink>
              </div>
              <div
                class="flex items-center justify-end w-40 py-2 font-semibold"
              >
                1.21 €
              </div>
              <div class="flex items-center justify-end w-40 py-2">4 шт.</div>
              <div
                class="flex items-center justify-end w-40 py-2 font-semibold"
              >
                4.84 €
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[400px] ml-auto px-5 py-4">
          <div class="flex gap-4 items-center justify-between">
            <div>Итого по продукту:</div>
            <div class="font-semibold">17.22 €</div>
          </div>
          <div class="flex gap-4 items-center justify-between">
            <div>Стоимость доставки:</div>
            <div class="font-semibold">17.22 €</div>
          </div>
          <div class="flex gap-4 items-center justify-between">
            <div>Сумма налога:</div>
            <div class="font-semibold">17.22 €</div>
          </div>
          <div class="flex gap-4 items-center justify-between">
            <div>Всего:</div>
            <div class="font-semibold">17.22 €</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.style-line {
  position: relative;
  margin-left: 22px;
}
.style-line::before {
  content: "";
  position: absolute;
  top: 42px;
  left: 0;
  margin: -1px 0 0 0;
  height: 1px;
  width: 30px;
  background: #777f8a;
}

.style-line::after {
  content: "";
  position: absolute;
  top: -6px;
  left: 0;
  margin: -1px 0 0 0;
  height: 48px;
  width: 1px;
  background: #777f8a;
}
</style>
