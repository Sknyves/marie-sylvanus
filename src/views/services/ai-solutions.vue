<script setup>
import { Brain, Bot, MessageSquare, Zap, Database, Cpu, CheckCircle, ArrowRight, Sparkles, FileSearch, Workflow } from 'lucide-vue-next'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const offerings = [
  {
    title: 'Chatbots IA Conversationnels',
    description: 'Assistants virtuels intelligents pour votre site ou application',
    icon: Bot,
    features: [
      'Compréhension du langage naturel (NLP)',
      'Réponses contextuelles personnalisées',
      'Intégration WhatsApp, Messenger, site web',
      'Apprentissage continu des conversations',
      'Support multilingue'
    ],
    useCases: ['Support client 24/7', 'Qualification de leads', 'Réservations automatiques'],
    price: '1 200 - 3 000 €',
    duration: '2-4 semaines'
  },
  {
    title: 'Systèmes RAG (Retrieval-Augmented Generation)',
    description: 'IA qui répond en se basant sur vos documents et données',
    icon: FileSearch,
    features: [
      'Analyse de vos documents (PDF, Word, bases de données)',
      'Réponses précises basées sur vos données',
      'Mise à jour automatique des connaissances',
      'Traçabilité des sources',
      'API pour intégration dans vos outils'
    ],
    useCases: ['Assistant documentation technique', 'Recherche intelligente', 'FAQ automatique'],
    price: '2 500 - 6 000 €',
    duration: '4-8 semaines'
  },
  {
    title: 'Automatisation Intelligente',
    description: 'Workflows automatisés avec prise de décision IA',
    icon: Workflow,
    features: [
      'Automatisation de tâches répétitives',
      'Classification automatique de documents',
      'Extraction de données intelligente',
      'Détection d\'anomalies',
      'Prédictions et recommandations'
    ],
    useCases: ['Tri automatique d\'emails', 'Analyse de factures', 'Scoring de leads'],
    price: '1 500 - 4 000 €',
    duration: '3-6 semaines'
  },
  {
    title: 'Computer Vision',
    description: 'Reconnaissance et analyse d\'images/vidéos',
    icon: Brain,
    features: [
      'Détection et classification d\'objets',
      'Reconnaissance faciale',
      'Analyse de vidéos en temps réel',
      'Contrôle qualité automatisé',
      'OCR (extraction de texte d\'images)'
    ],
    useCases: ['Surveillance intelligente', 'Contrôle qualité industriel', 'Analyse de stocks'],
    price: '2 000 - 5 500 €',
    duration: '4-10 semaines'
  },
  {
    title: 'Modèles ML Personnalisés',
    description: 'Modèles d\'apprentissage automatique sur mesure',
    icon: Cpu,
    features: [
      'Analyse prédictive',
      'Systèmes de recommandation',
      'Détection de fraude',
      'Optimisation de processus',
      'Formation et déploiement du modèle'
    ],
    useCases: ['Prévision de ventes', 'Recommandations produits', 'Détection d\'anomalies'],
    price: '3 000 - 8 000 €',
    duration: '6-12 semaines'
  },
  {
    title: 'Agents IA Autonomes',
    description: 'Agents intelligents qui exécutent des tâches complexes',
    icon: Zap,
    features: [
      'Planification et exécution de tâches',
      'Interaction avec APIs et outils',
      'Prise de décision autonome',
      'Apprentissage par renforcement',
      'Monitoring et rapports automatiques'
    ],
    useCases: ['Assistant de recherche', 'Automatisation de workflows', 'Veille concurrentielle'],
    price: '2 500 - 7 000 €',
    duration: '5-10 semaines'
  }
]

const technologies = ['Python', 'TensorFlow', 'OpenAI API', 'LangChain', 'Pinecone', 'Hugging Face', 'FastAPI', 'OpenCV']

const benefits = [
  { icon: Zap, title: 'Gain de temps', description: 'Automatisez jusqu\'à 80% des tâches répétitives' },
  { icon: Database, title: 'Exploitation de données', description: 'Transformez vos données en insights actionnables' },
  { icon: MessageSquare, title: 'Expérience client', description: 'Support 24/7 et réponses instantanées' },
  { icon: Sparkles, title: 'Avantage compétitif', description: 'Démarquez-vous avec l\'IA de pointe' }
]

onMounted(() => {
  gsap.fromTo('.ai-card',
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.ai-card',
        start: 'top 80%'
      }
    }
  )
})
</script>

<template>
  <section class="min-h-screen py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white">
    <div class="container mx-auto px-4">
      <!-- Hero -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full mb-6">
          <Sparkles class="w-4 h-4 mr-2 text-purple-400" />
          <span class="text-sm font-medium text-purple-300">Intelligence Artificielle</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Solutions <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">IA sur Mesure</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Chatbots intelligents, systèmes RAG, automatisation et Computer Vision. 
          Transformez votre entreprise avec l'IA de nouvelle génération.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in technologies" :key="tech" class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        <div v-for="benefit in benefits" :key="benefit.title" class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <component :is="benefit.icon" class="w-10 h-10 text-purple-400 mx-auto mb-4" />
          <h3 class="font-bold text-lg mb-2">{{ benefit.title }}</h3>
          <p class="text-sm text-gray-400">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- Offerings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="offer in offerings" :key="offer.title" class="ai-card bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <component :is="offer.icon" class="w-7 h-7 text-white" />
          </div>
          
          <h2 class="text-2xl font-bold mb-3">{{ offer.title }}</h2>
          <p class="text-gray-400 mb-6">{{ offer.description }}</p>
          
          <div class="mb-6">
            <h4 class="text-sm font-semibold text-purple-400 mb-3">Fonctionnalités</h4>
            <ul class="space-y-2">
              <li v-for="feature in offer.features" :key="feature" class="flex items-start text-sm">
                <CheckCircle class="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-semibold text-purple-400 mb-3">Cas d'usage</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="useCase in offer.useCases" :key="useCase" class="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                {{ useCase }}
              </span>
            </div>
          </div>

          <div class="border-t border-white/10 pt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-400">Prix</span>
              <span class="text-xl font-bold text-purple-400">{{ offer.price }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">Délai</span>
              <span class="text-sm font-semibold text-gray-300">{{ offer.duration }}</span>
            </div>
          </div>

          <router-link to="/contact" class="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center font-medium group">
            Demander un devis
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Prêt à intégrer l'IA dans votre entreprise ?</h2>
        <p class="text-lg mb-8 opacity-90">Je vous accompagne de l'idée au déploiement de votre solution IA.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
            Discuter de mon projet
            <ArrowRight class="w-5 h-5 ml-2" />
          </router-link>
          <a href="https://wa.me/22943655721?text=Bonjour%20Marie,%20je%20suis%20intéressé%20par%20vos%20solutions%20IA" target="_blank" class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
            WhatsApp Direct
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1400px;
}

.ai-card {
  opacity: 0;
}
</style>
