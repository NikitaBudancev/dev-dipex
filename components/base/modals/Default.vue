<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
const { open, close } = useModal({
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
})
</script>
<template>
  <VButton @click="() => open()">
    Open Modal
  </VButton>
  <ModalsContainer />
</template>