<template>
  <PopoverMain
    button-class="inline-flex items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer"
  >
    <template #button>
      <img
        :src="'/images/icons/flags/' + activeLang.icon"
        :alt="activeLang.name"
        width="25"
      />
      <span class="flex items-center">
        {{ locale.toUpperCase() }}
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
          ></path>
        </svg>
      </span>
    </template>
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
 </PopoverMain>
</template>

<script setup>
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const activeLang = computed(() => {
  const result = locales.value.filter((item) => item.code == locale.value);
  return result[0];
});
</script>
