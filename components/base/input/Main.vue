<template>
  <label class="relative">
    <span v-if="props.label" class="block mb-2 text-sm">{{ props.label }}</span>
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
      :class="{ 'border border-red-500': props.errors.length }"
      type="text"
      name="name"
      :value="props.modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      v-for="error of props.errors"
      :key="error.$uid"
      class="block mt-1 text-sm text-red-500"
    >
      {{ error.$message }}
    </span>
  </label>
</template>

<script setup lang="ts">
defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },

  errors: {
    type: Array,
    default() {
      return [];
    },
  },
});

console.log(props.errors[0]);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
