<template>
  <div class="flex flex-col gap-5">
    <BaseProductCard
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

  const {data} = toRefs(props)

  const products = data.value.products
  const pagination = data.value.pagination

</script>
