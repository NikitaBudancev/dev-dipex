<template>
  <div class="grid grid-cols-3 gap-6">
    <BaseCategoryCard
      v-for="category in categories"
      :key="category.id"
      :item="category"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const {categories} = toRefs(props)

</script>
