<template>
  <TooltipMain
    :tooltip="{ id: props.id, text: props.tooltipText, tooltipId }"
  >
    <Rating :rating="props.rating" :data-tooltip-target="tooltipId" />
 </TooltipMain>
</template>

<script setup lang="ts">
import { Rating } from "flowbite-vue";

const props = defineProps({
  id: {
    required: true,
    type: Number,
  },

  rating: {
    required: true,
    type: Number,
  },

  tooltipText: {
    required: true,
    type: String,
  },
});

const tooltipId = `tooltip-rating-${props.id}`;
</script>
