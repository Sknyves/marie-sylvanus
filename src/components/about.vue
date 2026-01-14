<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const skills = ref([
  { name: 'Vue.js', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Django', level: 70 },
  { name: 'TensorFlow', level: 65 }
]);

onMounted(() => {
  // Animation d'entrée de la section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.fromTo(".decorative-line", 
    { scaleY: 0, opacity: 0 },
    { scaleY: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
  )
  .fromTo(".about-title", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" },
    "-=0.8"
  )
  .fromTo(".about-subtitle", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.5"
  )
  .fromTo(".about-text", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    "-=0.4"
  )
  .fromTo(".cta-button", 
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
    "-=0.3"
  )
  .fromTo(".skill-item", 
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
    "-=0.5"
  );

  // Animation des barres de compétences
  gsap.utils.toArray('.skill-progress').forEach(progress => {
    const skillValue = progress.getAttribute('data-value');
    
    gsap.to(progress, {
      width: `${skillValue}%`,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: progress,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animation d'interaction pour le bouton
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, {
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        duration: 0.3
      });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, {
        scale: 1,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
  }

  // Animation des lignes décoratives au scroll
  gsap.to(".decorative-line", {
    y: 50,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});
</script>

<template>
    <div class="about-section justify-center flex py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F2EB] relative overflow-hidden">
      <!-- Éléments décoratifs d'arrière-plan -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div v-for="i in 5" :key="i" class="absolute rounded-full"
          :style="{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(135deg, #8B7B60 0%, #E9E1D1 100%)'
          }">
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl px-4 md:px-8">
        <!-- Ligne décorative gauche -->
        <div class="hidden md:flex md:w-1/6 justify-center items-start pt-16">
          <div class="decorative-line relative h-96">
            <svg viewBox="0 0 300 500" class="w-16 h-auto">
              <defs>
                <linearGradient id="gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#a3a3a3" />
                  <stop offset="50%" stop-color="#767c88" />
                  <stop offset="100%" stop-color="#262626" />
                </linearGradient>
              </defs>
              <path d="M 150,50 C 250,150 50,250 150,350 C 250,450 50,550 150,650" 
                    fill="none" 
                    stroke="url(#gradient-left)" 
                    stroke-width="6" />
            </svg>
          </div>
        </div>
        
        <!-- Contenu principal -->
        <div class="w-full md:w-2/3 space-y-6 md:space-y-8 px-4 md:px-12">
          <div class="text-center">
            <h2 class="about-title font-bold text-3xl md:text-4xl text-neutral-800">À propos de moi</h2>
            <p class="about-subtitle text-sm md:text-base italic text-gray-600 mt-2">Développeur full-stack passionné</p>
          </div>
          
          <div class="space-y-6">
            <p class="about-text text-center text-gray-700 text-base md:text-lg leading-relaxed">
              Développeur Full-Stack expérimenté et passionné, je suis spécialisé dans la conception d'applications web modernes et performantes. Maîtrisant parfaitement l'écosystème JavaScript (<strong>Vue.js</strong>, <strong>React</strong>, <strong>Node.js</strong>), je crée des interfaces utilisateur réactives et des architectures backend robustes. Mon expertise s'étend à l'intégration d'<strong>Intelligence Artificielle</strong> pour rendre vos projets plus intelligents et automatisés.
            </p>
            
            <p class="about-text text-center text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Je privilégie une approche "Clean Code" et l'optimisation des performances (<strong>SEO</strong>, chargement rapide) pour garantir une expérience utilisateur exceptionnelle. Que ce soit pour une application SPA complexe, un site e-commerce ou un dashboard analytique, je transforme vos besoins en solutions digitales concrètes. Toujours en veille technologique, je m'adapte rapidement aux nouveaux outils pour livrer des produits à la pointe de l'innovation.
            </p>
          </div>
          
          <!-- Compétences -->
          <div class="mt-8">
            <h3 class="text-xl font-semibold text-neutral-800 mb-4 text-center">Mes compétences</h3>
            <div class="space-y-4">
              <div v-for="(skill, index) in skills" :key="index" class="skill-item">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-neutral-700">{{ skill.name }}</span>
                  <span class="text-xs text-neutral-600">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="skill-progress h-full bg-gradient-to-r from-[#8B7B60] to-[#E9E1D1] rounded-full" :data-value="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bouton CTA -->
          <div class="text-center mt-8">
            <router-link to="/about" class="cta-button inline-flex items-center bg-neutral-700 hover:bg-neutral-800 border border-neutral-700 text-white py-2 px-6 rounded-full transition-all duration-300 shadow-md">
              <span class="mr-2">En savoir plus</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
        
        <!-- Ligne décorative droite -->
        <div class="hidden md:flex md:w-1/6 justify-center items-start pt-16">
          <div class="decorative-line relative h-96">
            <svg viewBox="0 0 300 500" class="w-16 h-auto">
              <defs>
                <linearGradient id="gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#a3a3a3" />
                  <stop offset="50%" stop-color="#767c88" />
                  <stop offset="100%" stop-color="#262626" />
                </linearGradient>
              </defs>
              <path d="M 150,50 C 250,150 50,250 150,350 C 250,450 50,550 150,650" 
                    fill="none" 
                    stroke="url(#gradient-right)" 
                    stroke-width="6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.decorative-line {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top center;
}

.about-title, .about-subtitle, .about-text, .cta-button, .skill-item {
  opacity: 0;
}

.skill-progress {
  width: 0%;
  transition: width 1.5s ease;
}

/* Animation pour les écrans mobiles */
@media (max-width: 768px) {
  .about-section {
    padding: 3rem 1rem;
  }
  
  .decorative-line {
    display: none;
  }
}
</style>