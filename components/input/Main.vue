<template>
  <label class="relative">
    <span v-if="label" class="inline-block mb-2 text-sm">{{ label }}</span>
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
      :class="{ 'border border-red-500': errors.length }"
      type="text"
      name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      v-for="error of errors"
      :key="error.$uid"
      class="block mt-1 text-sm text-red-500"
    >
      {{ error.$message }}
    </span>
  </label>
</template>

<script setup lang="ts">
defineEmits(["update:modelValue"]);

defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  errors: {
    type: Array as PropType<Array<{ $message: string; $uid: string }>>,
    default() {
      return [];
    },
  },
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
