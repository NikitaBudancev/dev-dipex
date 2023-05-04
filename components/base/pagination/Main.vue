<template>
  <div class="col-lg-12">
    <ul class="catalog-pagination">
      <li>
        <NuxtLink
          class="pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=250"
          >250
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pagination: {
    type: Array,
    required: true,
  },
});
</script>
