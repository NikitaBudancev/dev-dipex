<template>
  <NuxtLoadingIndicator color="orange"/>
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
import { ref } from "vue";

onMounted(() => {
  initFlowbite();
});
</script>
