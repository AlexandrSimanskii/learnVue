<template>
  <div @click.self="$emit('close')" class="popup">
    <div class="popup-content"><slot /></div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'my-popup'
})

const props = defineProps({
  popup: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(#000000, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &-content {
    max-width: 600px;
   
  }
}
</style>
