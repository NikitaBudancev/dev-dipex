<template>
  <div class="px-4 py-3">
    <div class="flex justify-end mb-2">
      <button
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        type="button"
      >
        Каталог
      </button>
    </div>
    <label for="input-group-search" class="sr-only">Поиск</label>
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
        id="input-group-search"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Поиск"
      />
    </div>
  </div>
  <ul class="max-h-[300px] overflow-x-auto scroll-grey mr-1 pl-4 py-3">
    <li v-for="n in 20" :key="n">
      <a class="text-sm" href="#"> Тросик газа / система тяг и рычагов</a>
    </li>
  </ul>
</template>
