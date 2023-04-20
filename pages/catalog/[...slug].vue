<template>
  <section>
    <BaseCategoryList :categories="categories"/>
    <div class="flex justify-center mt-8">
      <a class="btn" href="/catalog/rezerves-dalas/">Больше разделов</a>
    </div>
  </section>
  <section>
    <TabsMain />
  </section>
</template>

<script setup>
import { useCatalogStore } from '~/store/catalog'
import { storeToRefs } from 'pinia'

const catalogStore = useCatalogStore()
const { categories } = storeToRefs(catalogStore)
</script>

