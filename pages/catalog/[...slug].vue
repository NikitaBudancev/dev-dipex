<template>
  <section>
    <BaseCategoryList v-if="isCategory == 'category'" />
    <BaseCategoryProducts v-else-if="isCategory == 'products'" />
    <BaseProductDetail v-else />
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const isCategory = ref("");

let lengthRoutes = route.params.slug.length;

switch (lengthRoutes) {
  case 4:
    isCategory.value = "product";
    break;
  case 3:
    isCategory.value = "products";
    break;
  default:
    isCategory.value = "category";
}
</script>
