<template>
  <input class="input" type="text" v-model="model" :placeholder="placeholder" />
</template>

<script setup>
defineOptions({ name: 'MyInput' })
const props = defineProps(['placeholder'])
const model = defineModel()
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';
.input {
  @include app-border;
  outline: none;
  padding: 5px;
}
</style>
