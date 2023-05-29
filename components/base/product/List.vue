<template>
  <div class="flex flex-col gap-5">
    <BaseProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initTooltips } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initTooltips();
});
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = toRefs(props);

const products = data.value.products;
const pagination = data.value.pagination;
</script>
