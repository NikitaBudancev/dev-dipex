<template>
  <div
    :id="id"
    :class="props.className"
    :data-accordion="props.dataAccordion ?? 'open'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { initAccordions } from "flowbite";

onMounted(() => {
  initAccordions();
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  dataAccordion: {
    type: String,
    default: "",
  },

  className: {
    type: String,
    default: "",
  },
});
</script>
