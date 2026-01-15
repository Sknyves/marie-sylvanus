<script setup>
import { Sparkles, Code, Brain, Monitor, Users, Zap, CheckCircle, ArrowRight, MessageCircle } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: Code,
    title: 'Développement Web Full-Stack',
    description: 'Applications web modernes et performantes avec les dernières technologies',
    features: [
      'Sites vitrine et portfolios professionnels',
      'Applications web (e-commerce, SaaS, plateformes)',
      'APIs REST et intégrations tierces',
      'Design responsive et animations fluides',
      'Optimisation SEO et performances'
    ],
    technologies: ['Vue.js', 'React', 'Django', 'Node.js', 'TailwindCSS'],
    color: 'from-blue-500 to-cyan-500',
    pricing: {
      startup: '500 - 1 500 €',
      pme: '1 500 - 3 500 €',
      enterprise: 'Sur devis'
    }
  },
  {
    id: 2,
    icon: Brain,
    title: 'Solutions Intelligence Artificielle',
    description: 'Intégration d\'IA et Computer Vision pour automatiser vos processus',
    features: [
      'Reconnaissance et classification d\'images',
      'Traitement vidéo en temps réel',
      'Analyse de données et prédictions',
      'Modèles de Machine Learning personnalisés',
      'Intégration TensorFlow et OpenCV'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'PyTorch'],
    color: 'from-purple-500 to-pink-500',
    pricing: {
      startup: '1 000 - 2 500 €',
      pme: '2 500 - 6 000 €',
      enterprise: 'Sur devis'
    }
  },
  {
    id: 3,
    icon: Monitor,
    title: 'Applications Desktop',
    description: 'Logiciels natifs performants pour Windows, Mac et Linux',
    features: [
      'Applications desktop avec Qt/Electron',
      'Logiciels de gestion et traitement de données',
      'Interfaces utilisateur modernes',
      'Performance optimale en C++/Python',
      'Déploiement multi-plateformes'
    ],
    technologies: ['C++', 'Python', 'Qt', 'Electron', 'SQLite'],
    color: 'from-green-500 to-emerald-500',
    pricing: {
      startup: '700 - 1 800 €',
      pme: '1 800 - 4 500 €',
      enterprise: 'Sur devis'
    }
  },
  {
    id: 4,
    icon: Users,
    title: 'Consulting & Formation',
    description: 'Accompagnement technique et montée en compétences de vos équipes',
    features: [
      'Audit technique et recommandations',
      'Formation Vue.js, Python, IA',
      'Code review et optimisation',
      'Accompagnement projet de A à Z',
      'Mentorat développeurs juniors'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'Best Practices', 'Architecture'],
    color: 'from-orange-500 to-red-500',
    pricing: {
      startup: '30 - 40 €/heure',
      pme: '40 - 60 €/heure',
      enterprise: '60+ €/heure'
    }
  }
]

const clientTypes = [
  {
    type: 'Startups & Entrepreneurs',
    icon: Sparkles,
    description: 'Tarifs adaptés aux jeunes entreprises',
    benefits: ['Paiement flexible', 'MVP rapide', 'Support inclus']
  },
  {
    type: 'PME & Organisations',
    icon: Users,
    description: 'Solutions complètes pour entreprises établies',
    benefits: ['Maintenance long terme', 'Formation équipe', 'SLA garanti']
  },
  {
    type: 'Grandes Entreprises',
    icon: Zap,
    description: 'Projets complexes et sur mesure',
    benefits: ['Architecture scalable', 'Équipe dédiée', 'Support 24/7']
  }
]

const selectedService = ref(null)

onMounted(() => {
  // Animation d'entrée
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  tl.fromTo('.hero-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.8)' }
  )
  .fromTo('.hero-description',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    '-=0.4'
  )
  .fromTo('.service-card',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    '-=0.3'
  )

  // Animation des cartes au survol
  const cards = document.querySelectorAll('.service-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        duration: 0.3
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.3
      })
    })
  })
})

const getServiceRoute = (serviceId) => {
  const routes = {
    1: '/services/web-development',
    2: '/services/ai-solutions',
    3: '/services/desktop-apps',
    4: '/services/consulting'
  }
  return routes[serviceId] || '/contact'
}
</script>

<template>
  <section id="services" class="min-h-screen py-20 bg-gradient-to-b from-white to-[#F5F2EB]">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-20">
        <h1 class="hero-title text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
          Mes Services de <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7B60] to-neutral-800">Développement</span>
        </h1>
        <p class="hero-description text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          Je transforme vos idées en solutions digitales performantes. 
          Du développement web à l'intelligence artificielle, je vous accompagne dans tous vos projets technologiques.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0"
        >
          <!-- Header -->
          <div class="flex items-start justify-between mb-6">
            <div :class="['w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br', service.color]">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
          </div>

          <!-- Title & Description -->
          <h2 class="text-2xl font-bold text-neutral-800 mb-3">{{ service.title }}</h2>
          <p class="text-neutral-600 mb-6">{{ service.description }}</p>

          <!-- Features -->
          <ul class="space-y-3 mb-6">
            <li v-for="(feature, index) in service.features" :key="index" class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-neutral-700 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in service.technologies"
              :key="tech"
              class="px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-xs rounded-full font-medium"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Pricing -->
          <div class="border-t border-gray-200 pt-6 mb-6">
            <p class="text-sm font-semibold text-neutral-700 mb-3">Tarifs indicatifs :</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-neutral-600">Startups</span>
                <span class="font-semibold text-neutral-800">{{ service.pricing.startup }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600">PME</span>
                <span class="font-semibold text-neutral-800">{{ service.pricing.pme }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600">Entreprises</span>
                <span class="font-semibold text-neutral-800">{{ service.pricing.enterprise }}</span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <router-link
            :to="getServiceRoute(service.id)"
            class="w-full py-3 px-6 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center font-medium group"
          >
            En savoir plus
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <!-- Client Types Section -->
      <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
        <h2 class="text-3xl font-bold text-neutral-800 text-center mb-4">
          Tarifs Adaptés à Votre Structure
        </h2>
        <p class="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Que vous soyez une startup, une PME ou une grande entreprise, 
          je propose des solutions et tarifs adaptés à vos besoins et votre budget.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="client in clientTypes"
            :key="client.type"
            class="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-[#8B7B60] transition-all duration-300"
          >
            <component :is="client.icon" class="w-12 h-12 text-[#8B7B60] mx-auto mb-4" />
            <h3 class="text-xl font-bold text-neutral-800 mb-2">{{ client.type }}</h3>
            <p class="text-neutral-600 text-sm mb-4">{{ client.description }}</p>
            <ul class="space-y-2">
              <li v-for="benefit in client.benefits" :key="benefit" class="text-sm text-neutral-700 flex items-center justify-center">
                <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Final -->
      <div class="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Discutons de vos besoins et je vous proposerai une solution sur mesure avec un devis détaillé et transparent.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-white text-neutral-800 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
          >
            <MessageCircle class="w-5 h-5 mr-2" />
            Demander un devis gratuit
          </router-link>
          <a
            href="https://wa.me/22943655721?text=Bonjour%20Marie,%20je%20suis%20intéressé%20par%20vos%20services"
            target="_blank"
            class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-800 transition-all duration-300 font-semibold"
          >
            WhatsApp Direct
            <ArrowRight class="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.service-card {
  opacity: 0;
  transform: translateY(50px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}
</style>
