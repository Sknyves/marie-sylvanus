<script setup>
import { Code, Palette, Smartphone, Zap, Award, Users, Calendar, Rocket, Brain, Cpu, Download, MessageCircle } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

// Référence pour l'animation de la photo
const photoContainer = ref(null);

onMounted(() => {
  // Animation d'entrée de la section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.fromTo(".section-title", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" }
  )
  .fromTo(".section-description", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.4"
  )
  .fromTo(".profile-photo", 
    { scale: 0.8, opacity: 0, rotation: -5 },
    { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" },
    "-=0.4"
  )
  .fromTo(".profile-badge", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "bounce.out" },
    "-=0.5"
  )
  .fromTo(".skill-item", 
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
    "-=0.4"
  )
  .fromTo(".stat-item", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    "-=0.3"
  )
  .fromTo(".tech-category", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    "-=0.4"
  )
  .fromTo(".philosophy-item", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
    "-=0.5"
  );

  // Animation des barres de compétences
  gsap.utils.toArray('.skill-bar').forEach(bar => {
    const skillValue = bar.getAttribute('data-value');
    
    gsap.to(bar, {
      width: `${skillValue}%`,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animation des statistiques au survol
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animation des boutons
  const buttons = document.querySelectorAll('.action-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        y: -3,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        duration: 0.3
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
  });

  // Animation de la photo au survol
  const photo = document.querySelector('.profile-photo-container');
  if (photo) {
    photo.addEventListener('mouseenter', () => {
      gsap.to('.profile-photo', {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to('.profile-badge', {
        y: -5,
        duration: 0.5,
        ease: "power2.out"
      });
    });
    
    photo.addEventListener('mouseleave', () => {
      gsap.to('.profile-photo', {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to('.profile-badge', {
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  }

  // Effet de parallaxe sur la section
  gsap.to(".philosophy-section", {
    y: -30,
    scrollTrigger: {
      trigger: ".philosophy-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});
</script>

<template>
  <section id="about" class="min-h-screen py-20 bg-[#E9E1D1] relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
      <div v-for="i in 12" :key="i" class="absolute rounded-full"
        :style="{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'linear-gradient(135deg, #8B7B60 0%, #E9E1D1 100%)'
        }">
      </div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="section-title text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
          À propos de <span class="text-white drop-shadow-sm">Moi</span>
        </h1>
        <p class="section-description text-lg text-neutral-700 max-w-3xl mx-auto">
          Développeur passionné spécialisé dans les technologies modernes, 
          je crée des solutions innovantes qui allient performance et élégance.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Photo et présentation -->
        <div class="flex flex-col items-center lg:items-start">
          <div ref="photoContainer" class="profile-photo-container relative mb-8">
            <div class="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div class="profile-photo w-72 h-72 bg-neutral-800 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="/about-photo.png" 
                  alt="Marie Sylvain KINKPON" 
                  class="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            </div>
            <div class="profile-badge absolute -bottom-2 -right-2 bg-neutral-800 text-white px-4 py-2 rounded-full shadow-lg">
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
                class="action-button px-6 py-3 bg-neutral-800 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
              >
                <MessageCircle class="w-4 h-4 mr-2" />
                Me contacter
              </a>
              <a 
                href="/cv-meldev.pdf" 
                class="action-button px-6 py-3 border border-neutral-800 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-all duration-300 flex items-center"
              >
                <Download class="w-4 h-4 mr-2" />
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        <!-- Compétences principales -->
        <div>
          <h3 class="text-2xl font-bold text-neutral-800 mb-8">Expertises Principales</h3>
          
          <div class="space-y-6 mb-8">
            <div v-for="(skill, index) in skills" :key="index" class="skill-item group">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <component :is="skill.icon" class="w-5 h-5 mr-3 text-neutral-800" />
                  <span class="font-semibold text-neutral-800">{{ skill.name }}</span>
                </div>
                <span class="text-sm text-neutral-700">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white bg-opacity-50 rounded-full h-3 shadow-inner">
                <div 
                  class="skill-bar h-3 rounded-full transition-all duration-300 shadow-md"
                  :class="skill.color"
                  :data-value="skill.level"
                ></div>
              </div>
            </div>
          </div>

          <!-- Statistiques -->
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="stat-item bg-white bg-opacity-80 p-4 rounded-lg text-center hover:bg-opacity-100 transition-all duration-300 shadow-md"
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
          <div v-for="(items, category, index) in technologies" :key="index" class="tech-category text-center">
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
      <div class="philosophy-section bg-white bg-opacity-90 rounded-3xl p-8 md:p-12 shadow-lg">
        <h3 class="text-2xl md:text-3xl font-bold text-neutral-800 text-center mb-8">
          Ma Vision du Développement
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="philosophy-item text-center">
            <div class="w-16 h-16 bg-[#E9E1D1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Code class="w-8 h-8 text-neutral-800" />
            </div>
            <h4 class="font-semibold text-neutral-800 mb-2">Code Robustesse</h4>
            <p class="text-neutral-600 text-sm">
              Applications stables, maintenables et évolutives grâce à des fondations solides.
            </p>
          </div>
          <div class="philosophy-item text-center">
            <div class="w-16 h-16 bg-[#E9E1D1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain class="w-8 h-8 text-neutral-800" />
            </div>
            <h4 class="font-semibold text-neutral-800 mb-2">Innovation IA</h4>
            <p class="text-neutral-600 text-sm">
              Intégration d'intelligence artificielle et computer vision dans des solutions modernes.
            </p>
          </div>
          <div class="philosophy-item text-center">
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

/* Classes pour les animations GSAP */
.section-title,
.section-description,
.profile-photo,
.profile-badge,
.skill-item,
.stat-item,
.tech-category,
.philosophy-item {
  opacity: 0;
}

.skill-bar {
  width: 0%;
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
  
  .action-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}
</style>