<template>
  <div class="px-6 py-6 lg:px-8">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Авторизация
    </h3>
    <form class="space-y-6" action="#" @submit.prevent="submitForm">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >E-mail</label
        >
        <input
          id="email"
          v-model="formData.email"
          type="email"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          :class="{
            'border-red-500 border-2': v$.email.$error,
          }"
          placeholder="name@company.com"
          @change="v$.email.$touch"
        />
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >{{ t("title") }}</label
        >
        <input
          id="password"
          v-model="formData.password"
          type="password"
          name="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          @change="v$.password.$touch"
        />
      </div>
      <div class="flex justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Запомнить меня</label
          >
        </div>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Войти
      </button>
      <div
        class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
      >
        <button
          class="text-blue-700 hover:underline dark:text-blue-500"
          type="button"
          @click="$emit('changeForm', 'register')"
        >
          Регистрация
        </button>
      </div>
      <div
        class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
      >
        <button
          class="text-blue-700 hover:underline dark:text-blue-500"
          type="button"
          @click="$emit('changeForm', 'forgot')"
        >
          Забыли свой пароль?
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

defineEmits(["changeForm"]);

const { t } = useLang();

const formData = reactive({
  email: { required, email },
  password: { required },
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage(
        "Поле обязательное для заполнения",
        required
      ),
      email: helpers.withMessage(
        "Адрес электронной почты должен содержать симовы @ . ",
        email
      ),
    },
    password: {
      required: helpers.withMessage(
        "Поле обязательное для заполнения",
        required
      ),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    //    Some code
  }
};
</script>
