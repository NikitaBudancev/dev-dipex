<template>
  <div class="px-6 py-6 lg:px-8">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      {{ t("form.forgotPassword") }}
    </h3>
    <div class="mb-4">
      {{ t("form.forgotText") }}
    </div>
    <form class="space-y-6" @submit.prevent="formSubmit">
      <InputMain
        v-model="formData.email"
        :errors="v$.email.$errors"
        :label="t('email')"
        name="email"
      />
      <ButtonMain class="btn w-full py-3" name="Отправить" />
      <div
        class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
      >
        У вас уже есть аккаунт?
        <button
          class="text-blue-600 dark:text-blue-500 hover:underline"
          type="button"
          @click="$emit('changeForm', 'login')"
        >
          Войти
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";

const { t } = useLang();

const formData = reactive({
  email: "",
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage(
        "Поле обязательное для заполнения",
        required
      ),
      email: helpers.withMessage(t("error.email"), email),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const formSubmit = (event) => {
  v$.value.$validate();
  if (!v$.value.$error) {
    //    Some code
  }
};
</script>
