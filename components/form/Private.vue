<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form
      class="space-y-4 md:space-y-6 max-w-[400px] m-auto flex justify-center flex-col"
      @submit.prevent="formSubmit"
    >
      <div
        class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        {{ t("form.lk") }}
      </div>
      <InputMain
        v-model="formData.firstName"
        name="firstName"
        :label="t('firstName')"
        :errors="v$.firstName.$errors"
      />
      <InputMain
        v-model="formData.lastName"
        name="lastName"
        :label="t('lastName')"
        :errors="v$.lastName.$errors"
      />
      <InputMain
        v-model="formData.secondName"
        name="secondName"
        :label="t('secondName')"
        :errors="v$.secondName.$errors"
      />
      <div
        class="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        {{ t("password") }}
      </div>
      <InputMain
        v-model="formData.password"
        type="password"
        name="password"
        :label="t('passwordNew')"
        :errors="v$.password.$errors"
      />
      <InputMain
        v-model="formData.passwordConfirm"
        name="passwordConfirm"
        type="password"
        :label="t('passwordConfirm')"
        :errors="v$.passwordConfirm.$errors"
      />
      <ButtonMain class="btn py-3" :name="t('button.saveProfile')" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs, minLength, helpers } from "@vuelidate/validators";

const { t } = useLang();

const formData = reactive({
  firstName: "",
  lastName: "",
  secondName: "",
  password: "",
  passwordConfirm: "",
});

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage(t("error.required"), required),
    },
    lastName: {
      required: helpers.withMessage(t("error.required"), required),
    },
    secondName: {
      required: helpers.withMessage(t("error.required"), required),
    },
    password: {
      required: helpers.withMessage(t("error.required"), required),
      minLength: helpers.withMessage(
        ({ $params }) => t("error.minLength").replace("minLength", $params.min),
        minLength(6)
      ),
    },
    passwordConfirm: {
      confirmPassword: helpers.withMessage(
        t("error.passwordConfirm"),
        sameAs(formData.password)
      ),
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
