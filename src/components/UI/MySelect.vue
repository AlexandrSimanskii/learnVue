<template>
  <select class="select" @change="$emit('changeOption', $event.target.value)">
    <option value="">Сортировка</option>
    <option v-for="option of optionsList" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script setup>
defineOptions({
  name: 'my-select'
})
const props = defineProps({
  optionsList: {
    type: Array
  }
})


</script>

<style lang="scss" scoped>
.select {
  padding: 3px 5px;
}
</style>
