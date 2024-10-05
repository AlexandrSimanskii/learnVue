<template>
  <form @submit.prevent class="form">
    <p>Создать список</p>
    <my-input    v-focus v-model="title" placeholder="Введите язык"></my-input>
    <my-input v-model="body" placeholder="Введите описание"></my-input>

    <my-button class="form-btn" @click="create">Создать</my-button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create'])

const title = ref('')
const body = ref('')

function create() {
  if ((title.value, body.value)) {
    emit('create', title.value, body.value)
  }
  title.value = ''
  body.value = ''
}
</script>

<style lang="scss" scoped>
@import '../src/assets/styles/main';
.is {
  color: aqua;
}
.form {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;
  &-btn {
    align-self: flex-end;
  }
}
.input {
  @include app-border;
  outline: none;
  padding: 3px;
}
</style>
