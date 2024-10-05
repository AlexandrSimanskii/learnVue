<template>
  <div>
    <my-popup v-if="popup" :popup="popup" @close="popup = false"
      ><FormList @create="createList"
    /></my-popup>

    <header class="header">
      <my-button class="popup-btn" @click="popup = true">{{ buttonText }}</my-button>
      <my-input v-model="searchTerm" placeholder="Поиск"></my-input>
      <my-select @changeOption="handleSortChange" :optionsList="optionsList"></my-select>
    </header>

    <p v-if="loading">Идет загрузка...</p>

    <posts-list
      v-else="!loading"
      :lists="searchAndSortedLists"
      :loading="loading"
      @delete="deletePost"
    />
    <div class="observer" :style="{ backgroundColor: testColor }" ref="observer"></div>
    <!-- <my-pagination
        @changePage="handleChangePage"
        :totalPages="totalPages"
        :page="curentPage"
      ></my-pagination> -->
  </div>
</template>

<script setup>
import axios from 'axios'

import MyPagination from '@/components/MyPagination.vue'
import PostsList from '@/components/PostsList.vue'
import FormList from '@/components/FormList.vue'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'

const loading = ref(true)
const popup = ref(false)
const lists = ref([])
const searchTerm = ref('')
const selectedSort = ref('')
const totalPages = ref(0)
const limit = 10
const curentPage = ref(1)
const target = useTemplateRef('observer')
const testColor = ref('blue')
const optionsList = [
  { value: 'title', name: 'По заголовку' },
  { value: 'body', name: 'По описанию' }
]
const buttonText = computed(() =>
  lists.value.length ? 'Создать новый пост' : 'Создать первый пост'
)

function createList(title, body) {
  popup.value = false
  const id = new Date().toISOString()
  lists.value.push({ id, title, body })
}

function deletePost(post) {
  lists.value = lists.value.filter((item) => item.id !== post.id)
}

function getPosts() {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${curentPage.value}`)
    .then((res) => {
      totalPages.value = Math.ceil(res.headers['x-total-count'] / limit)

      lists.value = [...lists.value, ...res.data]
    })
    .catch((err) => console.log('Ошибка при получении постов'))
    .finally(() => (loading.value = false))
}

function handleSortChange(newValue) {
  selectedSort.value = newValue
}
function handleChangePage(newValue) {
  curentPage.value = String(newValue)
  getPosts()
}

const sortedList = computed(() => {
  if (selectedSort.value) {
    return [...lists.value].sort((post1, post2) => {
      return post1[selectedSort.value].localeCompare(post2[selectedSort.value])
    })
  } else {
    return lists.value
  }
})
const searchAndSortedLists = computed(() => {
  return sortedList.value.filter((post) => post.title.includes(searchTerm.value))
})

onMounted(() => {
  getPosts()

  let options = {
    rootMargin: '10px',
    threshold: 1
  }

  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && curentPage.value < totalPages.value) {
        curentPage.value += 1
        getPosts()
      }
    })
  }

  let observer = new IntersectionObserver(callback, options)

  observer.observe(target.value)
})
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.observer {
  
  background-color: blanchedalmond;
  margin-bottom: 100px;
}
</style>
