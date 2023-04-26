<template>
  <div
    v-if="loading"
    class="fixed left-0 top-0 h-0.5 w-full z-[10000000] bg-amber-600 animate-pulse"
  ></div>
  <div class="page">
    <TheHeader />
    <div class="content">
      <TheTopMenu />
      <BaseBredcrumbsDefault v-if="$route.path !== '/'" />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { Modal } from "flowbite-vue";
import { ref } from "vue";

onMounted(() => {
  initFlowbite();
});

const isShowModal = ref(false);
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
  console.log("start");
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  console.log("finish");
});
</script>
