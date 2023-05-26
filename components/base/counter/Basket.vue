<template>
  <div
    class="product-item-info-container product-item-info-container_qty-block"
    data-entity="quantity-block"
  >
    <div class="flex items-center gap-5">
      <div class="text-end">
        <div class="text-xl">0.96 €</div>
        <div class="text-sm text-gray-400">цена за 1 шт.</div>
      </div>
      <div class="flex items-center gap-1 text-xl" data-test="">
        <button
          class="bg-gray-300 w-7 h-7 leading-7  text-center"
          @click="decrementCounter"
        >
          -
        </button>
        <input
          class="max-w-[30px] h-5 border-0 p-0 appearance-none-input text-center"
          v-model.number="counter"
          type="number"
          name="quantity"
          min="1"
        />
        <button
          class="bg-gray-300 w-7 h-7 leading-7  text-center"
          @click="incrementCounter"
        >
          +
        </button>
      </div>
      <div class="text-lg">5.76 €</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = ref(1);

const incrementCounter = () => counter.value++;
const decrementCounter = () => (counter.value > 1 ? counter.value-- : 1);
</script>
