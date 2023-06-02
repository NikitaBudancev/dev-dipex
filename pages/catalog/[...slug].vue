<template>
  <section>
    <CategoryList v-if="isCategory == 'category'" />
    <CategoryProducts v-else-if="isCategory == 'products'" />
    <ProductDetail v-else />
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const isCategory = ref("");

const lengthRoutes = route.params.slug.length;

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
