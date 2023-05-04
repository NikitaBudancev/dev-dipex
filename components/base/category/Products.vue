<template>
  <div class="flex gap-5">
    <div class="w-3/12">
      <BaseProductFilter />
    </div>
    <div class="w-9/12">
      <div class="flex flex-col gap-4" v-if="pending">
        <div
          class="bg-white p-3 pb-0 rounded-md shadow-md h-[213px] animate-pulse"
          v-for="n in 20"
          :key="n"
        ></div>
      </div>
      <BaseProductList v-else :data="data" />
      <div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = await useProducts();
</script>
