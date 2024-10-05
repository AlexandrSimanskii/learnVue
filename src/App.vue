<template>
  <nav-bar></nav-bar>

  <div class="app">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style lang="scss" scoped>
.app {
  max-width: 1200px;
  margin: 20px auto;
}
</style>
