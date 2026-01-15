import Contact from '@/components/contact.vue'
import About from '@/views/about.vue'
import Home from '@/views/home.vue'
import Projects from '@/views/projects.vue'
import Services from '@/views/services.vue'
import WebDevelopment from '@/views/services/web-development.vue'
import AISolutions from '@/views/services/ai-solutions.vue'
import DesktopApps from '@/views/services/desktop-apps.vue'
import Consulting from '@/views/services/consulting.vue'
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
    path: '/services',
    name: 'services',
    component: Services,
    meta: {
      title: 'Services & Tarifs | Marie Sylvanus KINKPON',
      description: 'Développement web full-stack, solutions IA, applications desktop et consulting. Tarifs adaptés aux startups, PME et grandes entreprises. Devis gratuit.'
    }
  },
  {
    path: '/services/web-development',
    name: 'web-development',
    component: WebDevelopment,
    meta: {
      title: 'Développement Web Full-Stack | Marie Sylvanus KINKPON',
      description: 'Création de sites web, applications SaaS, e-commerce et PWA. Technologies modernes : Vue.js, React, Django, Node.js. Devis gratuit.'
    }
  },
  {
    path: '/services/ai-solutions',
    name: 'ai-solutions',
    component: AISolutions,
    meta: {
      title: 'Solutions IA : Chatbots, RAG & Automatisation | Marie Sylvanus',
      description: 'Chatbots intelligents, systèmes RAG, automatisation IA, Computer Vision et modèles ML personnalisés. Expert en TensorFlow, OpenAI et LangChain.'
    }
  },
  {
    path: '/services/desktop-apps',
    name: 'desktop-apps',
    component: DesktopApps,
    meta: {
      title: 'Applications Desktop Multi-plateformes | Marie Sylvanus',
      description: 'Développement d\'applications desktop pour Windows, Mac et Linux. Qt, Electron, C++, Python. Logiciels de gestion sur mesure.'
    }
  },
  {
    path: '/services/consulting',
    name: 'consulting',
    component: Consulting,
    meta: {
      title: 'Consulting & Formation Développement | Marie Sylvanus',
      description: 'Audit technique, formation Vue.js/Python/IA, code review et accompagnement projet. Expert technique pour vos équipes de développement.'
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
