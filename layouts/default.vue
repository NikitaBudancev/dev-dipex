<template>
  <div class="page">
    <TheHeader />
    <div class="content">
      <TheTopMenu />
      <BaseBredcrumbsDefault v-if="$route.path !== '/'"/>
      <slot />
    </div>
    <TheFooter />
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";


</script>
