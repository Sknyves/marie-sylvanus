<script setup>
import { Code, CheckCircle, ArrowRight, Zap, Sparkles, Globe, Smartphone, ShoppingCart } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const offerings = [
  {
    title: 'Sites Vitrine & Portfolios',
    description: 'Site web professionnel pour présenter votre activité',
    icon: Globe,
    features: ['Design moderne et responsive', 'Optimisation SEO', 'Formulaire de contact', 'Hébergement inclus'],
    price: '500 - 1 200 €',
    duration: '1-2 semaines'
  },
  {
    title: 'Applications Web (SaaS)',
    description: 'Plateformes web complètes avec backend robuste',
    icon: Zap,
    features: ['Architecture scalable', 'API REST', 'Authentification sécurisée', 'Dashboard admin'],
    price: '2 000 - 5 000 €',
    duration: '4-8 semaines'
  },
  {
    title: 'E-commerce',
    description: 'Boutique en ligne avec paiement intégré',
    icon: ShoppingCart,
    features: ['Gestion produits', 'Panier et checkout', 'Paiement sécurisé', 'Suivi commandes'],
    price: '1 500 - 3 500 €',
    duration: '3-6 semaines'
  },
  {
    title: 'Applications Mobiles (PWA)',
    description: 'Applications web progressives multi-plateformes',
    icon: Smartphone,
    features: ['Fonctionne offline', 'Installable', 'Notifications push', 'Performance native'],
    price: '1 800 - 4 000 €',
    duration: '4-8 semaines'
  }
]

const technologies = ['Vue.js', 'React', 'Django', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Vite']

const process = [
  { step: 1, title: 'Analyse', description: 'Étude de vos besoins et définition du cahier des charges' },
  { step: 2, title: 'Design', description: 'Maquettes et validation de l\'interface utilisateur' },
  { step: 3, title: 'Développement', description: 'Codage de l\'application avec tests réguliers' },
  { step: 4, title: 'Déploiement', description: 'Mise en ligne et formation à l\'utilisation' }
]

onMounted(() => {
  gsap.fromTo('.service-card',
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.service-card',
        start: 'top 80%'
      }
    }
  )
})
</script>

<template>
  <section class="min-h-screen py-20 bg-gradient-to-b from-white to-[#F5F2EB]">
    <div class="container mx-auto px-4">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
          Développement Web <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Full-Stack</span>
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
          Applications web modernes, performantes et évolutives. Du site vitrine à la plateforme SaaS complexe.
        </p>
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <span v-for="tech in technologies" :key="tech" class="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 shadow-sm">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Offerings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div v-for="offer in offerings" :key="offer.title" class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <component :is="offer.icon" class="w-12 h-12 text-blue-500 mb-4" />
          <h2 class="text-2xl font-bold text-neutral-800 mb-3">{{ offer.title }}</h2>
          <p class="text-neutral-600 mb-6">{{ offer.description }}</p>
          
          <ul class="space-y-3 mb-6">
            <li v-for="feature in offer.features" :key="feature" class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-neutral-700 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="border-t border-gray-200 pt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-neutral-600">Prix</span>
              <span class="text-xl font-bold text-neutral-800">{{ offer.price }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-neutral-600">Délai</span>
              <span class="text-sm font-semibold text-neutral-700">{{ offer.duration }}</span>
            </div>
          </div>

          <router-link to="/contact" class="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center font-medium group">
            Demander un devis
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <!-- Process -->
      <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
        <h2 class="text-3xl font-bold text-neutral-800 text-center mb-12">Mon Processus de Développement</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="item in process" :key="item.step" class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {{ item.step }}
            </div>
            <h3 class="text-xl font-bold text-neutral-800 mb-2">{{ item.title }}</h3>
            <p class="text-neutral-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
        <h2 class="text-3xl font-bold mb-4">Prêt à lancer votre projet web ?</h2>
        <p class="text-lg mb-8 opacity-90">Discutons de vos besoins et je vous proposerai une solution sur mesure.</p>
        <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
          Contactez-moi
          <ArrowRight class="w-5 h-5 ml-2" />
        </router-link>
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
}
</style>
