<template>
  <TooltipMain
    :tooltip="{ id: props.id, text: props.tooltipText, tooltipId }"
  >
    <button :data-tooltip-target="tooltipId" type="button">
      <img class="h-7" :src="props.imgPath" />
    </button>
 </TooltipMain>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    required: true,
    type: Number,
  },

  imgPath: {
    type: String,
    required: true,
  },

  tooltipText: {
    required: true,
    type: String,
  },
});

const tooltipId = `tooltip-brand-${props.id}`;
</script>
