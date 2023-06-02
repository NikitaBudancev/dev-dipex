<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="flex items-center md:order-2">
        <button
          :class="props.buttonClass"
          :data-dropdown-toggle="popoverId"
          type="button"
        >
          <slot name="button" />
        </button>
        <div
          :id="popoverId"
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-2xl dark:bg-gray-700"
        >
          <slot />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonClass: {
    type: String,
  },
});

const popoverId = `popover_id_${Math.random().toString(36).slice(2)}`;
</script>
