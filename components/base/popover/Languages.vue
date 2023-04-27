<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="flex items-center md:order-2">
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            :src="'/images/icons/flags/' + activeLang.icon"
            :alt="activeLang.name"
            width="25"
          />
          {{ locale.toUpperCase() }}
        </button>
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-2xl dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul class="py-2 font-medium" role="none">
            <li v-for="item in locales" :key="item.code">
              <NuxtLink
                :to="switchLocalePath(item.code)"
                class="block px-4 py-2 text-sm w-full text-start text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <span class="inline-flex items-center gap-4">
                  <img
                    :src="'/images/icons/flags/' + item.icon"
                    :alt="item.name"
                    width="30"
                  />
                  {{ item.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath()

const activeLang = computed(() => {
  const result = locales.value.filter((item) => item.code == locale.value);
  return result[0];
});

</script>
