<template>
  <section>
    <BaseCategoryList :categories="categories" v-if="isCategory"/>
    <BaseCategoryProducts v-else />
  </section>
  <section>
    <TabsMain />
  </section>
</template>

<script setup>
import { useCatalogStore } from "~/store/catalog";
import { storeToRefs } from "pinia";

const route = useRoute();

const catalogStore = useCatalogStore();
const { categories } = storeToRefs(catalogStore);

const isCategory = ref(false);

isCategory.value = route.params.slug.length < 3;
</script>
