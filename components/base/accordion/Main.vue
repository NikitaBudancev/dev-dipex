<template>
  <div :class="className" :id="id" :data-accordion="dataAccordion ?? 'open'">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { initAccordions } from "flowbite";

onMounted(() => {
  initAccordions();
});

const { id, dataAccordion, className } = defineProps({
  id: {
    type: String,
    required: true,
  },

  dataAccordion: {
    type: String,
  },

  className: {
    type: String,
  },
});
</script>
