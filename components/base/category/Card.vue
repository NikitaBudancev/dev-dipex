<template>
  <div class="bg-white p-3 rounded-md shadow-md relative min-h-[190px]">
    <img
      :src="item.image"
      class="absolute bottom-3 right-3 w-28 h-28 object-contain"
    />

    <NuxtLink
      :to="localePath('/catalog/rezerves-dalas/exhaust-system/')"
      class="font-semibold mb-4 block"
    >
      {{ item.title }}
    </NuxtLink>
    <div class="category-item__body max-w-[300px]">
      <ul class="mb-2">
        <li
          v-for="category in item.subCategories"
          :key="category.id"
          class="text-sm text-gray-500 mb-1"
        >
          <NuxtLink
            class="hover:text-blue-600"
            :to="localePath('/catalog/rezerves-dalas/exhaust-system/')"
          >
            {{ category.title }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
        to="/catalog/rezerves-dalas/exhaust-system/"
      >
        Все товары
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          height="16px"
          data-icon="angle-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          class="svg-inline--fa fa-angle-right fa-w-8"
        >
          <path
            fill="#FFAE0A"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            class=""
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { item } = toRefs(props);
</script>
