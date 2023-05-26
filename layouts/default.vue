<template>
  <NuxtLoadingIndicator color="orange" />
  <div class="page">
    <TheHeader />
    <div class="content">
      <TheTopMenu />
      <TheBreadcrumb v-if="$route.path !== '/'" />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
