<template>
  <div class="px-6 py-6 lg:px-8">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Сменить пароль
    </h3>
    <div class="mb-4">
      Если вы забыли пароль, введите E-Mail. Новый пароль будет выслан вам по
      E-Mail.
    </div>
    <form class="space-y-6" action="#">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >E-mail</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Отправить
      </button>
      <div
        class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
      >
        У вас уже есть аккаунт?
        <button
          class="text-blue-600 dark:text-blue-500 hover:underline"
          @click="$emit('changeForm', 'login')"
          type="button"
        >
          Войти
        </button>
      </div>
    </form>
  </div>
</template>
