<template>
  <div
    class="product-item-brand__rating product-item-brand__rating_hide-mobile tooltip__btn"
  >
    <div>
      <Rating :rating="4" data-tooltip-target="tooltip-default-1" />
    </div>
    <div
      id="tooltip-default-1"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      Средний класс
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rating } from "flowbite-vue";
</script>
