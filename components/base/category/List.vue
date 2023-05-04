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
import { useCatalogStore } from "~/store/catalog";
import { storeToRefs } from "pinia";

const store = useCatalogStore();

const { categories } = storeToRefs(store);
</script>
