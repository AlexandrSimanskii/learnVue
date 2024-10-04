<template>
  <div class="list">
    <div>{{ id }}
      <p class="text"><span>Название:</span> {{ title }}.</p>
      <p class="text"><span>Описание:</span> {{ body }}.</p>
    </div>
    <my-button @click="$emit('delete')">Удалить</my-button>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const { body, title,id } = props.post


</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.list {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px;
  @include app-border;

  margin-bottom: 10px;
}
.text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
span {
  color: red;
}
</style>
