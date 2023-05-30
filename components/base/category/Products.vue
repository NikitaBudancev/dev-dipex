<template>
  <div class="flex gap-5">
    <div class="w-3/12">
      <BaseProductFilter />
    </div>
    <div class="w-9/12">
      <div v-if="pending" class="flex flex-col gap-4">
        <BaseProductPreview v-for="n in 20" :key="n" />
      </div>
      <BaseProductList v-else :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = await useProducts();

console.log(data);
</script>
