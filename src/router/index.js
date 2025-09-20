import Contact from '@/components/contact.vue'
import About from '@/views/about.vue'
import Home from '@/views/home.vue'
import Projects from '@/views/projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/projets',
    name: 'projets',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
