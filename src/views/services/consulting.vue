<script setup>
import { Users, GraduationCap, Code, CheckCircle, ArrowRight, BookOpen, Award } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'

const offerings = [
  {
    title: 'Audit Technique',
    description: 'Analyse approfondie de votre code et architecture',
    icon: Code,
    features: ['Revue de code', 'Analyse de performance', 'Recommandations d\'amélioration', 'Rapport détaillé'],
    price: '40 - 60 €/h'
  },
  {
    title: 'Formation Développeurs',
    description: 'Montée en compétences de vos équipes',
    icon: GraduationCap,
    features: ['Vue.js, Python, Django', 'Best practices', 'Formation sur mesure', 'Support post-formation'],
    price: '50 - 80 €/h'
  },
  {
    title: 'Accompagnement Projet',
    description: 'Support technique tout au long de votre projet',
    icon: Users,
    features: ['Architecture et design', 'Code review régulier', 'Mentorat équipe', 'Résolution de blocages'],
    price: '45 - 70 €/h'
  }
]

onMounted(() => {
  gsap.fromTo('.consulting-card',
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
          Consulting & <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Formation</span>
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          Expertise technique et accompagnement pour vos équipes de développement.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div v-for="offer in offerings" :key="offer.title" class="consulting-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <component :is="offer.icon" class="w-12 h-12 text-orange-500 mb-4" />
          <h2 class="text-2xl font-bold text-neutral-800 mb-3">{{ offer.title }}</h2>
          <p class="text-neutral-600 mb-6">{{ offer.description }}</p>
          
          <ul class="space-y-3 mb-6">
            <li v-for="feature in offer.features" :key="feature" class="flex items-start">
              <CheckCircle class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-neutral-700 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="border-t border-gray-200 pt-6 mb-6">
            <div class="flex justify-between items-center">
              <span class="text-sm text-neutral-600">Tarif horaire</span>
              <span class="text-xl font-bold text-neutral-800">{{ offer.price }}</span>
            </div>
          </div>

          <router-link to="/contact" class="w-full py-3 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center font-medium group">
            Me contacter
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <div class="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-white">
        <h2 class="text-3xl font-bold mb-4">Besoin d'expertise technique ?</h2>
        <p class="text-lg mb-8 opacity-90">Je vous accompagne dans vos projets et la montée en compétences de vos équipes.</p>
        <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
          Discutons-en
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
