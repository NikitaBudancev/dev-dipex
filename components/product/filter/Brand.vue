<template>
  <div>
    <label
      v-for="n in 30"
      :key="n"
      class="flex items-center gap-2 mb-4 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
      />
      <span>Default checkbox</span>
    </label>
  </div>
</template>
