<template>
  <div
    class="product-item-info-container product-item-info-container_qty-block"
    data-entity="quantity-block"
  >
    <div class="product-item-amount">
      <div class="flex items-center gap-0.5" data-test="">
        <button
          class="bg-gray-300 w-5 h-5 leading-5 text-center"
          @click="decrementCounter"
        >
          -
        </button>
        <input
          class="max-w-[30px] h-5 border-0 p-0 appearance-none-input text-center text-sm"
          v-model.number="counter"
          type="number"
          name="quantity"
          min="1"
        />
        <button
          class="bg-gray-300 w-5 h-5 leading-5 text-center"
          @click="incrementCounter"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = ref(1);

const incrementCounter = () => counter.value++;
const decrementCounter = () => counter.value > 1 ? counter.value-- : 1;
</script>
