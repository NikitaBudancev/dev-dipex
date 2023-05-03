<template>
  <div class="flex flex-col gap-5">
    <BaseProductCard v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "~/store/catalog";
import { storeToRefs } from "pinia";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { ref } from "vue";

onMounted(() => {
  initFlowbite();
});

const store = useCatalogStore();
const { fetchProduct } = store;
const { products, pagination } = storeToRefs(store);

await fetchProduct();
</script>
