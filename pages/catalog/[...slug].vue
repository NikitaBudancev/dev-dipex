<template>
  <section>
    <BaseCategoryList
      :categories="categories"
      v-if="isCategory == 'category'"
    />
    <BaseCategoryProducts
      v-else-if="isCategory == 'products'"
      :pagination="pagination"
    />
    <BaseProductDetail v-else />
  </section>
</template>

<script setup lang="ts">
import { useCatalogStore } from "~/store/catalog";
import { storeToRefs } from "pinia";

const route = useRoute();
const isCategory = ref("");

const store = useCatalogStore();

// const { fetchCategories } = store;
const { categories, pagination } = storeToRefs(store);

// await fetchCategories();

// console.log(categories);

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
