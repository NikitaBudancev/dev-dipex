<template>
  <div>
    <div class="flex gap-5">
      <div class="flex-1 max-w-xs">
        <ul class="bg-white rounded-lg shadow-sm">
          <li>
            <NuxtLink
              class="block px-4 py-2 hover:bg-slate-100"
              to="/about/delivery/"
              >Доставка</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 hover:bg-slate-100"
              to="/about/payment/"
              >Оплата</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 hover:bg-slate-100"
              to="/about/contacts/"
              >Контакты</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 hover:bg-slate-100"
              to="/about/delivery/"
              >Возврат и возмещение</NuxtLink
            >
          </li>
        </ul>
        <div class="mt-5 bg-white rounded-lg shadow-sm">
          <div class="icon-text gap-4 text-sm text-gray-700 border-b py-2 pl-4">
            <img
              width="45"
              height="45"
              src="/images/icons/contacts/card-lock.svg"
              alt=""
            /><span>На весь товар действует гарантия производителя</span>
          </div>
          <div class="icon-text gap-4 text-sm text-gray-700 border-b py-2 pl-4">
            <img
              width="45"
              height="45"
              src="/images/icons/contacts/card-lock.svg"
              alt=""
            /><span>Возврат товара в течение 30 дней</span>
          </div>
          <div class="icon-text gap-4 text-sm text-gray-700 py-2 pl-4">
            <img
              width="45"
              height="45"
              src="/images/icons/contacts/card-lock.svg"
              alt=""
            /><span>Безопасные и удобные платежи</span>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <form action="#" class="bg-white rounded-lg shadow-sm p-5">
          <div class="text-xl font-semibold text-gray-700 mb-6">
            Связаться с нами
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First name</label
              >
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Last name</label
              >
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Company</label
              >
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Select an option</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div class="mt-5">
            <button
              type="button"
              class="py-2 px-8 bg-lime-500 text-white font-semibold rounded hover:bg-lime-600"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
      <div class="flex-1 text-sm max-w-xs">
        <div class="bg-white rounded-lg shadow-sm p-4">
          <div class="font-semibold mb-2">
            Магазин: Maskavas iela 9b, Salaspils
          </div>
          <div class="font-semibold mb-1">LV-2121</div>
          <div class="flex justify-between">
            <div>Телефон:</div>
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="tel:+371-22511113"
              >+371-22511113</a
            >
          </div>
          <div class="flex justify-between">
            <div>Телефон:</div>
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="tel:+371-22511113"
              >+371-22511113</a
            >
          </div>
          <div class="flex justify-between">
            <div>Телефон:</div>
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="tel:+371-22511113"
              >+371-22511113</a
            >
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mt-5 p-4">
          <div class="font-semibold mb-2">Рабочее время:</div>
          <div class="flex justify-between">
            <div>Будние дни:</div>
            <div class="relative pl-5 icon-text">
              <span class="circle circle-middle"></span>
              <span> 09:00 - 19:00</span>
            </div>
          </div>
          <div class="flex justify-between">
            <div>Суббота:</div>
            <div class="relative pl-5 icon-text">
              <span class="circle circle-middle"></span>
              <span>10:00 - 14:00</span>
            </div>
          </div>
          <div class="flex justify-between">
            <div>Воскресенье:</div>
            <div class="relative pl-5 icon-text">
              <span class="circle"></span>
              <span>выходной</span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mt-5 p-4">
          <div class="font-semibold mb-2">*SIA "LuckMix"*</div>
          <div class="flex justify-between">
            <div>Компания:</div>
            <div>SIA LuckMix</div>
          </div>
          <div class="flex justify-between">
            <div>Рег. номер:</div>
            <div>LV40203192886</div>
          </div>
          <div class="flex justify-between">
            <div>Maskavas iela 9b, Salaspils LV-2121 Latvija</div>
          </div>
          <div class="flex justify-between">
            <div>Банк:</div>
            <div>Swedbank AS, HABALV22</div>
          </div>
          <div class="flex justify-between">
            <div>Счет:</div>
            <div>LV92HABA0551046478336</div>
          </div>
          <div>
            Время работы интернет-магазина: 24/7 Все цены указаны с 21% НДС Мы
            гарантируем индивидуальный подход к каждому клиенту.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  position: absolute;
  top: 4px;
  left: 0;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #e3e3e2;
}
</style>
