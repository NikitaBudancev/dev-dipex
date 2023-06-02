<template>
  <div class="flex items-start">
    <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <div class="flex items-center h-5 gap-2">
        <input
          type="checkbox"
          :value="props.modelValue"
          v-bind="$attrs"
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <span>{{ props.text }}</span>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
defineEmits(["update:modelValue"]);

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
