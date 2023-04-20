<template>
  <div class="grid grid-cols-3 gap-6 mt-8">
    <BaseCategoryCard
      v-for="category in categories"
      :key="category.id"
      :item="category"
    />
  </div>
</template>

<script>
export default {
  props: ['categories']
};
</script>
