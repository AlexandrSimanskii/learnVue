<template>
  <div class="navbar">
    <RouterLink to="/">Go to Home</RouterLink>

    <div class="nav-btns">
      <my-button @click="$router.push('/posts')">Посты</my-button
      ><my-button @click="$router.push('/about')">О нас</my-button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MyButton from './UI/MyButton.vue'




</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px;
  background-color: beige;
  display: flex;
  justify-content: space-between;
}
.nav-btns {
  display: flex;
  gap: 10px;
}
</style>
