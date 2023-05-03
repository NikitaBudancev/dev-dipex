<template>
  <div class="col-lg-12">
    <ul class="catalog-pagination">
      <li>
        <a
          class="active pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=1"
          >1</a
        >
      </li>
      <li>
        <a
          class="pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=2"
          >2</a
        >
      </li>
      <li>
        <a
          class="pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=3"
          >3</a
        >
      </li>
      <li>
        <a
          class="pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=4"
          >4</a
        >
      </li>
      <li>
        <a
          class="pagination__link"
          href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/brake-pad-set/?page=250"
          >250</a
        >
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
