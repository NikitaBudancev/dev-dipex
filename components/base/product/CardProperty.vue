<template>
  <div class="product-item__properties-block">
    <ul class="text-sm text-[#757575]" :class="{ visible }">
      <li
        class="product-item__properties-item"
        v-for="(item, index) in properties"
        :key="item.id"
        :class="[index >= 4 ? 'property-hidden' : '']"
      >
        <span class="font-semibold text-black/80">{{ item.name }}:</span>
        <span class="product-item__property-value">{{ item.value }}</span>
      </li>
    </ul>
    <button
      @click="toggleVisible"
      class="text-blue-500 text-sm underline hover:no-underline hover:text-black/80"
    >
      {{ btnTextShowMore }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { properties } = defineProps({
  properties: {
    type: Array,
    required: true,
  },
});

const visible = ref(false);
const toggleVisible = () => (visible.value = !visible.value);
const btnTextShowMore = computed(() =>
  visible.value ? "Скрыть" : "Показать еще"
);
</script>

<style scoped>
.property-hidden {
  display: none;
}
.visible .property-hidden {
  display: block;
}
</style>
