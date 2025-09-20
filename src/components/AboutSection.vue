<script setup>
import { Code, Palette, Smartphone, Zap, Award, Users, Calendar, Rocket, Brain, Cpu } from 'lucide-vue-next';

const skills = [
  { name: 'Vue.js', level: 90, icon: Code, color: 'bg-green-500' },
  { name: 'Python', level: 85, icon: Zap, color: 'bg-blue-500' },
  { name: 'C/C++', level: 80, icon: Cpu, color: 'bg-purple-500' },
  { name: 'Computer Vision', level: 75, icon: Brain, color: 'bg-red-500' }
];

const stats = [
  { icon: Award, number: '50+', label: 'Projets réalisés' },
  { icon: Users, number: '30+', label: 'Clients satisfaits' },
  { icon: Calendar, number: '3+', label: 'Années d\'expérience' },
  { icon: Rocket, number: '24/7', label: 'Disponibilité' }
];

const technologies = {
  'Frontend': ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  'Backend': ['Python', 'Django', 'C#', 'Java', 'Node.js'],
  'Languages': ['C', 'C++', 'Python', 'Java', 'C#', 'JavaScript'],
  'Outils & IA': ['TensorFlow', 'Computer Vision', 'Nativefier', 'Git', 'Docker']
};
</script>

<template>
  <section id="about" class="min-h-screen py-20 bg-[#E9E1D1]">
    <div class="container mx-auto px-4">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
          À propos de <span class="text-white drop-shadow-sm">Moi</span>
        </h1>
        <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
          Développeur passionné spécialisé dans les technologies modernes, 
          je crée des solutions innovantes qui allient performance et élégance.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Photo et présentation -->
        <div class="flex flex-col items-center lg:items-start">
          <div class="relative mb-8">
            <div class="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div class="w-72 h-72 bg-neutral-800 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="/about-photo.png" 
                  alt="Marie Sylvain KINKPON" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="absolute -bottom-2 -right-2 bg-neutral-800 text-white px-4 py-2 rounded-full shadow-lg">
              <span class="text-sm font-semibold">Full-Stack Developer</span>
            </div>
          </div>

          <div class="text-center lg:text-left">
            <h2 class="text-2xl font-bold text-neutral-800 mb-4">Marie Sylvain KINKPON</h2>
            <p class="text-neutral-700 mb-6">
              Développeur full-stack avec une expertise en Vue.js, Python et intelligence artificielle. 
              Je combine créativité technique et rigueur pour concevoir des applications web et mobiles 
              performantes et intuitives.
            </p>
            <div class="flex justify-center lg:justify-start space-x-4">
              <a 
                href="#contact" 
                class="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 shadow-md"
              >
                Me contacter
              </a>
              <a 
                href="/cv-meldev.pdf" 
                class="px-6 py-3 border border-neutral-800 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-300"
              >
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        <!-- Compétences principales -->
        <div>
          <h3 class="text-2xl font-bold text-neutral-800 mb-8">Expertises Principales</h3>
          
          <div class="space-y-6 mb-8">
            <div v-for="(skill, index) in skills" :key="index" class="group">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <component :is="skill.icon" class="w-5 h-5 mr-3 text-neutral-800" />
                  <span class="font-semibold text-neutral-800">{{ skill.name }}</span>
                </div>
                <span class="text-sm text-neutral-700">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white bg-opacity-50 rounded-full h-3 shadow-inner">
                <div 
                  class="h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 shadow-md"
                  :class="skill.color"
                  :style="`width: ${skill.level}%`"
                ></div>
              </div>
            </div>
          </div>

          <!-- Statistiques -->
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="bg-white bg-opacity-80 p-4 rounded-lg text-center hover:bg-opacity-100 transition-all duration-300 shadow-md"
            >
              <component :is="stat.icon" class="w-8 h-8 text-neutral-800 mx-auto mb-2" />
              <p class="text-2xl font-bold text-neutral-800">{{ stat.number }}</p>
              <p class="text-sm text-neutral-600">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stack Technologique -->
      <div class="mb-20">
        <h3 class="text-3xl font-bold text-neutral-800 text-center mb-12">Stack Technologique</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(items, category, index) in technologies" :key="index" class="text-center">
            <div class="bg-white bg-opacity-90 p-6 rounded-2xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl">
              <h4 class="text-xl font-semibold text-neutral-800 mb-4">{{ category }}</h4>
              <ul class="space-y-2">
                <li 
                  v-for="(tech, techIndex) in items" 
                  :key="techIndex"
                  class="text-neutral-700 hover:text-neutral-800 transition-colors duration-200 font-medium"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Philosophie -->
      <div class="bg-white bg-opacity-90 rounded-3xl p-8 md:p-12 shadow-lg">
        <h3 class="text-2xl md:text-3xl font-bold text-neutral-800 text-center mb-8">
          Ma Vision du Développement
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-[#E9E1D1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Code class="w-8 h-8 text-neutral-800" />
            </div>
            <h4 class="font-semibold text-neutral-800 mb-2">Code Robustesse</h4>
            <p class="text-neutral-600 text-sm">
              Applications stables, maintenables et évolutives grâce à des fondations solides.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-[#E9E1D1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain class="w-8 h-8 text-neutral-800" />
            </div>
            <h4 class="font-semibold text-neutral-800 mb-2">Innovation IA</h4>
            <p class="text-neutral-600 text-sm">
              Intégration d'intelligence artificielle et computer vision dans des solutions modernes.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-[#E9E1D1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket class="w-8 h-8 text-neutral-800" />
            </div>
            <h4 class="font-semibold text-neutral-800 mb-2">Performance</h4>
            <p class="text-neutral-600 text-sm">
              Optimisation des performances et expérience utilisateur fluide sur tous devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

/* Animation pour les barres de compétences */
.h-3 {
  transition: width 2s ease-in-out;
}

/* Responsive design */
@media (max-width: 768px) {
  .w-80 {
    width: 280px;
    height: 280px;
  }
  
  .w-72 {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
}
</style>