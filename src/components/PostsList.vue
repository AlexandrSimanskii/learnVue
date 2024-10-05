<template>
  <div v-if="lists.length">
    <h2 class="title">Список постов</h2>
    <TransitionGroup name="list">
      <post
        @delete="$emit('delete', post)"
        v-for="post of props.lists"
        :post="post"
        :key="post.title"
    /></TransitionGroup>
  </div>
  <h2 v-else>Пока нет ни одного поста.</h2>
</template>

<script setup>

import Post from './Post.vue'

const props = defineProps({
  lists: {
    type: Array,
    redequired: true
  },
  loading: { type: Boolean }
})
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
