<script setup>
import About from '@/components/about.vue';
import Banner from '@/components/banner.vue';
import Contact from '@/components/contact.vue';
import Projects from '@/components/projects.vue';
import { onMounted, ref, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const componentsLoaded = ref({
  banner: false,
  about: false,
  projects: false,
  contact: false
});

const scrollProgress = ref(0);
const showScrollTop = ref(false);
const activeSection = ref('banner');

// Animation de transition entre les sections
onMounted(() => {
  // Animation d'entrée globale
  const tl = gsap.timeline();
  
  tl.fromTo(".section-transition", 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
  );

  // Effet de parallaxe pour les sections
  gsap.utils.toArray(".parallax-section").forEach(section => {
    gsap.to(section, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Animation des séparateurs entre les sections
  gsap.utils.toArray(".section-divider").forEach(divider => {
    gsap.fromTo(divider,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: divider,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animation progressive au défilement
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false // Mettre à true pour debugger les triggers
        }
      }
    );
  });

  // Animation des éléments de navigation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        componentsLoaded.value[sectionId] = true;
        activeSection.value = sectionId;
        
        // Animation spécifique pour chaque section
        switch(sectionId) {
          case 'banner':
            animateBanner();
            break;
          case 'about':
            animateAbout();
            break;
          case 'projets':
            animateProjects();
            break;
          case 'contact':
            animateContact();
            break;
        }
      }
    });
  }, observerOptions);

  // Observer chaque section
  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });

  // Événements de défilement
  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('scroll', toggleScrollTop);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
  window.removeEventListener('scroll', toggleScrollTop);
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

// Fonctions pour le défilement
const updateScrollProgress = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrollY = window.scrollY;
  
  scrollProgress.value = (scrollY / documentHeight) * 100;
};

const toggleScrollTop = () => {
  showScrollTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

// Animations spécifiques pour chaque section
const animateBanner = () => {
  console.log("Banner section animated");
};

const animateAbout = () => {
  console.log("About section animated");
};

const animateProjects = () => {
  console.log("Projects section animated");
};

const animateContact = () => {
  console.log("Contact section animated");
};

// Traduction des noms de section
const getSectionName = (sectionId) => {
  const names = {
    'banner': 'Accueil',
    'about': 'À propos',
    'projets': 'Projets',
    'contact': 'Contact'
  };
  return names[sectionId] || sectionId;
};
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10">
      <div v-for="i in 20" :key="i" class="absolute rounded-full"
        :style="{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'linear-gradient(135deg, #8B7B60 0%, #E9E1D1 100%)',
          animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
          animationDelay: `${Math.random() * 5}s`
        }">
      </div>
    </div>

    <div class="relative z-10">
      <!-- Navigation rapide flottante améliorée -->
      <div class="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div class="flex flex-col space-y-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100">
          <button 
            v-for="section in ['banner', 'about', 'projets', 'contact']" 
            :key="section"
            @click="scrollToSection(section)"
            class="relative flex items-center justify-center group"
            :aria-label="`Aller à la section ${getSectionName(section)}`"
            :aria-current="activeSection === section ? 'true' : 'false'"
          >
            <div class="w-2 h-2 rounded-full transition-all duration-300"
              :class="{
                'bg-neutral-400 scale-100': activeSection !== section,
                'bg-neutral-800 scale-150': activeSection === section
              }">
            </div>
            
            <!-- Ligne de connexion entre les points -->
            <div v-if="section !== 'banner'" class="absolute -top-5 h-5 w-0.5 bg-neutral-300"></div>
            
            <!-- Tooltip avec nom de section -->
            <span class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
              {{ getSectionName(section) }}
            </span>
            
            <!-- Indicateur de section active -->
            <span v-if="activeSection === section" class="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-xs font-medium text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Actif
            </span>
          </button>
        </div>
      </div>

      <!-- Bouton de retour en haut 
      <button 
        v-if="showScrollTop" 
        @click="scrollToTop"
        class="fixed right-6 bottom-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 hover:bg-white transition-all duration-300 group lg:right-8 lg:bottom-8"
        aria-label="Retour en haut de la page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-700 group-hover:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span class="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Haut de page
        </span>
      </button>-->

      <!-- Indicateur de progression de défilement -->
      <div class="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
        <div class="h-full bg-neutral-800 transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>
      </div>

      <div class="space-y-[100px]">
        <!-- Banner Section -->
        <section id="banner" class="section-transition parallax-section min-h-screen relative">
          <Banner />
          <div class="section-divider absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neutral-300 rounded-full"></div>
        </section>

        <!-- About Section -->
        <section id="about" class="section-transition parallax-section relative">
          <About />
          <div class="section-divider absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neutral-300 rounded-full"></div>
        </section>

        <!-- Projects Section -->
        <section id="projets" class="section-transition parallax-section relative">
          <Projects />
          <div class="section-divider absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neutral-300 rounded-full"></div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section-transition parallax-section">
          <Contact />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.section-transition {
  opacity: 0;
  transform: translateY(30px);
}

.section-divider {
  opacity: 0;
  transform: scaleX(0);
}

/* Animation pour le bouton de retour en haut */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
}

/* Responsive design */
@media (max-width: 1024px) {
  .space-y-\[100px\] {
    space-y: 80px;
  }
}

@media (max-width: 768px) {
  .space-y-\[100px\] {
    space-y: 60px;
  }
  
  .fixed.right-6 {
    right: 1rem;
    bottom: 1rem;
  }
}

/* Amélioration de l'accessibilité */
button:focus {
  outline: 2px solid #8B5CF6;
  outline-offset: 2px;
}

/* Optimisation des performances */
@media (prefers-reduced-motion: reduce) {
  .section-transition,
  .parallax-section,
  button {
    animation: none;
    transition: none;
  }
}
</style>