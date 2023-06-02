<template>
  <div>
    <NuxtLoadingIndicator color="orange" />
    <div class="page">
      <TheHeader />
      <main class="content">
        <TheTopMenu />
        <TheBreadcrumb v-if="$route.path !== '/'" />
        {{ firstName }}
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
