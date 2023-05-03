<template>
  <div class="flex gap-5">
    <div class="w-3/12">
      <BaseProductFilter />
    </div>
    <div class="w-9/12">
      <BaseProductList />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pagination: {
    type: Array,
    required: true,
  },
});

const { pagination } = props;

console.log(pagination);
</script>
