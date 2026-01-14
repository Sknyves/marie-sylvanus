import Contact from '@/components/contact.vue'
import About from '@/views/about.vue'
import Home from '@/views/home.vue'
import Projects from '@/views/projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Marie Sylvanus KINKPON | Développeur Full-Stack & IA',
      description: 'Découvrez le portfolio de Marie Sylvanus KINKPON, développeur full-stack expert en Vue.js, Python et Intelligence Artificielle. Solutions web innovantes et performantes.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'À propos | Marie Sylvanus KINKPON',
      description: 'Développeur full-stack passionné spécialisé en Vue.js, Python, Django et Intelligence Artificielle. Découvrez mon parcours, mes compétences techniques et ma vision du développement web moderne.'
    }
  },
  {
    path: '/projets',
    name: 'projets',
    component: Projects,
    meta: {
      title: 'Mes Réalisations | Portfolio Marie Sylvanus',
      description: 'Explorez mes projets de développement web, applications desktop et solutions IA. Portfolio incluant des applications Vue.js, systèmes de Computer Vision et APIs Django.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contactez-moi | Marie Sylvanus KINKPON',
      description: 'Vous avez un projet web ou une idée d\'application ? Contactez Marie Sylvanus KINKPON pour discuter de vos besoins en développement full-stack, IA ou solutions sur mesure.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  // Update title
  document.title = to.meta.title || 'Marie Sylvanus KINKPON - Portfolio'

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDescription = document.querySelector('meta[property="og:description"]')

  if (ogTitle && to.meta.title) {
    ogTitle.setAttribute('content', to.meta.title)
  }
  if (ogDescription && to.meta.description) {
    ogDescription.setAttribute('content', to.meta.description)
  }
})

export default router
