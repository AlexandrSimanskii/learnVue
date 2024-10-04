<template>
  <div class="pagination">
    <div
      class="pagination-item"
      :class="{ active: pages == page }"
      v-for="pages of totalPages"
      @click="$emit('changePage', pages)"
    >
      {{ pages }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPages: {
    type: Number
  },
  page: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
@import '../src/assets/styles/main';
.pagination {
  display: flex;
  gap: 6px;
  &-item {
    border: 2px solid $theme;
    border-radius: 3px;
    padding: 4px;
  }
}
.active {
  background-color: bisque;
}
</style>
