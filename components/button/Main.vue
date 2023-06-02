<template>
  <button :disabled="props.disabled">
    {{ props.name }}
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
