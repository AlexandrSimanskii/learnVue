<template>
  <button class="button" ><slot /></button>
</template>

<script setup>
defineOptions({
  name: 'MyButton'
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main';
button {
  background-color: $theme;
  padding: 5px 7px;
  color: $light-text;
  border-radius: 3px;
  border: none;
}
</style>
