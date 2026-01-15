<script setup>
import { Monitor, Cpu, HardDrive, Zap, CheckCircle, ArrowRight, Settings, Database } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'

const offerings = [
  {
    title: 'Applications de Gestion',
    description: 'Logiciels métier pour optimiser vos processus',
    icon: Database,
    features: ['Interface intuitive', 'Base de données locale/cloud', 'Exports Excel/PDF', 'Sauvegarde automatique'],
    price: '1 500 - 4 000 €'
  },
  {
    title: 'Outils de Traitement de Données',
    description: 'Applications performantes pour analyse de données',
    icon: Cpu,
    features: ['Traitement haute performance', 'Visualisation de données', 'Import/Export multi-formats', 'Automatisation de tâches'],
    price: '1 200 - 3 500 €'
  },
  {
    title: 'Applications Multi-plateformes',
    description: 'Un seul code pour Windows, Mac et Linux',
    icon: Monitor,
    features: ['Electron ou Qt', 'Interface native', 'Mises à jour automatiques', 'Installation simplifiée'],
    price: '2 000 - 5 000 €'
  }
]

const technologies = ['C++', 'Python', 'Qt', 'Electron', 'SQLite', 'PostgreSQL']

onMounted(() => {
  gsap.fromTo('.desktop-card',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
  )
})
</script>

<template>
  <section class="min-h-screen py-20 bg-gradient-to-b from-white to-[#F5F2EB]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
          Applications <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Desktop</span>
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
          Logiciels natifs performants pour Windows, Mac et Linux. Solutions sur mesure pour vos besoins métier.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in technologies" :key="tech" class="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 shadow-sm">
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div v-for="offer in offerings" :key="offer.title" class="desktop-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <component :is="offer.icon" class="w-12 h-12 text-green-500 mb-4" />
          <h2 class="text-2xl font-bold text-neutral-800 mb-3">{{ offer.title }}</h2>
          <p class="text-neutral-600 mb-6">{{ offer.description }}</p>
          
          <ul class="space-y-3 mb-6">
            <li v-for="feature in offer.features" :key="feature" class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-neutral-700 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="border-t border-gray-200 pt-6 mb-6">
            <div class="flex justify-between items-center">
              <span class="text-sm text-neutral-600">À partir de</span>
              <span class="text-xl font-bold text-neutral-800">{{ offer.price }}</span>
            </div>
          </div>

          <router-link to="/contact" class="w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center font-medium group">
            Demander un devis
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <div class="text-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 md:p-12 text-white">
        <h2 class="text-3xl font-bold mb-4">Besoin d'un logiciel sur mesure ?</h2>
        <p class="text-lg mb-8 opacity-90">Je développe des applications desktop adaptées à vos besoins spécifiques.</p>
        <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
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
</style>
