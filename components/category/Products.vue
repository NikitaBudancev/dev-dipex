<template>
  <div class="flex gap-5">
    <div class="w-3/12">
      <ProductFilter />
    </div>
    <div class="w-9/12">
      <div v-if="pending" class="flex flex-col gap-4">
        <ProductPreview v-for="n in 20" :key="n" />
      </div>
      <ProductList v-else :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { pending, data } = await useProducts(route.fullPath);
</script>
