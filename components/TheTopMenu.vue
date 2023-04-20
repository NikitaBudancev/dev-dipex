<template>
  <section>
    <div class="flex justify-between items-center gap-8 mb-4">
      <div class="w-3/12 shadow rounded-xl">
        <NuxtLink
          class="icon-text justify-center py-5 bg-amber-500 rounded-xl text-white hover:bg-amber-500/90"
          to="/catalog/"
        >
          <svg
            aria-hidden="true"
            height="20px"
            style="margin-right: 10px"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fff"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              class=""
            ></path>
          </svg>
          <span>Каталог</span>
        </NuxtLink>
      </div>
      <div class="w-9/12 shadow rounded-xl">
        <ul
          class="flex justify-between text-center bg-white rounded-xl overflow-hidden font-medium"
        >
          <li class="w-full">
            <NuxtLink class="block py-5 hover:bg-gray-200" to="/about/payment/"
              >Оплата</NuxtLink>
          </li>
          <li class="w-full">
            <NuxtLink class="block py-5 hover:bg-gray-200" to="/about/delivery/"
              >Доставка</NuxtLink>
          </li>
          <li class="w-full">
            <NuxtLink class="block py-5 hover:bg-gray-200" to="/about/contacts/"
              >Контакты</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>