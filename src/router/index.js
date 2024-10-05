import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/pages/Home.vue')

const About = () => import('@/pages/About.vue')
const Posts = () => import('@/pages/Posts.vue')
const PostPage = () => import('@/components/PostPage.vue')


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostPage }
]




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
