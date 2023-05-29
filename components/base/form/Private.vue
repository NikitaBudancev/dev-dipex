<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form
      class="space-y-4 md:space-y-6 max-w-[400px] m-auto flex justify-center flex-col"
      action="#"
    >
      <div
        class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Личные данные
      </div>
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Имя</label
        >
        <input
          id="name"
          type="text"
          name="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Фамилия</label
        >
        <input
          id="last_name"
          type="text"
          name="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="second_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Отчество</label
        >
        <input
          id="second_name"
          type="text"
          name="second_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div
        class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Пароль
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Новый пароль</label
        >
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Подтверждение пароля</label
        >
        <input
          id="confirm-password"
          type="confirm-password"
          name="confirm-password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Сохранить настройки профиля
      </button>
    </form>
  </div>
</template>
