<script setup>
import { Braces, HomeIcon, InfoIcon, Phone, Menu, X, Sparkles } from 'lucide-vue-next';
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Observer le défilement pour changer le style de la navbar
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10;
  });

  // Animation d'entrée de la navbar
  const tl = gsap.timeline();
  
  tl.fromTo(".logo-letter", 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.7)" }
  )
  .fromTo(".nav-name", 
    { y: -15, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    "-=0.3"
  )
  .fromTo(".nav-title", 
    { y: -10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
    "-=0.2"
  )
  .fromTo(".nav-item", 
    { y: -10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
    "-=0.3"
  );

  // Animation des séparateurs
  gsap.fromTo(".nav-separator",
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
  );
});

// Observer l'état du menu mobile pour l'animation
watch(isMenuOpen, (newVal) => {
  if (newVal) {
    // Ouvrir le menu mobile avec animation
    gsap.to(".mobile-menu", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });
    
    gsap.fromTo(".mobile-nav-item",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
    );
  } else {
    // Fermer le menu mobile avec animation
    gsap.to(".mobile-menu", {
      y: -10,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  }
});

// Animation des liens au survol
const animateNavItem = (element, isHover) => {
  if (isHover) {
    gsap.to(element, {
      y: -3,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(element.querySelector('svg'), {
      rotation: 10,
      duration: 0.3,
      ease: "power2.out"
    });
  } else {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(element.querySelector('svg'), {
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};
</script>

<template>
  <nav 
    class="w-full py-4 fixed top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-[#E9E1D1] shadow-sm'"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo PORTFOLIO avec animation -->
      <div class="flex font-bold text-lg sm:text-xl text-neutral-800 tracking-widest">
        <span 
          v-for="(letter, index) in 'PORTFOLIO'" 
          :key="index" 
          class="logo-letter inline-block"
        >
          {{ letter }}
        </span>
      </div>

      <div class="nav-separator h-6 w-px bg-neutral-300 mx-2 md:mx-4"></div>
      
      <!-- Nom et titre - visible à partir de md -->
      <div class="text-center flex-shrink-0 hidden md:block mx-2">
        <p class="nav-name font-semibold text-base lg:text-lg text-neutral-800 tracking-wide m-0">MARIE SYLVANUS KINKPON</p>
        <p class="nav-title text-xs lg:text-sm text-gray-500 italic mt-1 m-0">Développeur full-stack</p>
        <p class="nav-title text-xs lg:text-sm text-gray-500 italic mt-1 m-0">...de l'idée au résultat</p>
      </div>

      <div class="nav-separator h-6 w-px bg-neutral-300 mx-2 md:mx-4"></div>
      
      <!-- Menu de navigation desktop -->
      <div class="hidden md:flex gap-4 lg:gap-6">
        <router-link 
          to="/" 
          class="nav-item flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 group relative"
          title="Accueil"
          @mouseenter="e => animateNavItem(e.currentTarget, true)"
          @mouseleave="e => animateNavItem(e.currentTarget, false)"
        >
          <HomeIcon class="w-5 h-5 lg:w-6 lg:h-6 mb-1 transition-transform" />
          <span class="text-xs font-medium">Accueil</span>
          <Sparkles class="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </router-link>
        <router-link 
          to="/about" 
          class="nav-item flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 group relative"
          title="À propos"
          @mouseenter="e => animateNavItem(e.currentTarget, true)"
          @mouseleave="e => animateNavItem(e.currentTarget, false)"
        >
          <InfoIcon class="w-5 h-5 lg:w-6 lg:h-6 mb-1 transition-transform" />
          <span class="text-xs font-medium">À propos</span>
          <Sparkles class="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </router-link>
        <router-link 
          to="/projets" 
          class="nav-item flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 group relative"
          title="Projets"
          @mouseenter="e => animateNavItem(e.currentTarget, true)"
          @mouseleave="e => animateNavItem(e.currentTarget, false)"
        >
          <Braces class="w-5 h-5 lg:w-6 lg:h-6 mb-1 transition-transform" />
          <span class="text-xs font-medium">Projets</span>
          <Sparkles class="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </router-link>
        <router-link 
          to="/contact" 
          class="nav-item flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 group relative"
          title="Contact"
          @mouseenter="e => animateNavItem(e.currentTarget, true)"
          @mouseleave="e => animateNavItem(e.currentTarget, false)"
        >
          <Phone class="w-5 h-5 lg:w-6 lg:h-6 mb-1 transition-transform" />
          <span class="text-xs font-medium">Contact</span>
          <Sparkles class="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </router-link>
      </div>

      <!-- Bouton menu mobile -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors relative"
        aria-label="Menu"
        :class="isMenuOpen ? 'bg-neutral-100' : ''"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6 transition-transform" :class="isMenuOpen ? 'rotate-90' : ''" />
        <X v-else class="w-6 h-6 transition-transform" :class="isMenuOpen ? 'rotate-90' : ''" />
        
        <!-- Indicateur animé -->
        <span v-if="isMenuOpen" class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
        <span v-if="isMenuOpen" class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
      </button>
    </div>

    <!-- Menu mobile -->
    <div 
      v-if="isMenuOpen"
      class="mobile-menu md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-t border-neutral-200 transform -translate-y-2 opacity-0"
    >
      <div class="px-4 py-4 space-y-2">
        <router-link 
          to="/" 
          @click="isMenuOpen = false"
          class="mobile-nav-item flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Accueil"
        >
          <HomeIcon class="w-5 h-5 mr-3" />
          <span class="font-medium">Accueil</span>
        </router-link>
        <router-link 
          to="/about" 
          @click="isMenuOpen = false"
          class="mobile-nav-item flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="À propos"
        >
          <InfoIcon class="w-5 h-5 mr-3" />
          <span class="font-medium">À propos</span>
        </router-link>
        <router-link 
          to="/projets" 
          @click="isMenuOpen = false"
          class="mobile-nav-item flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Projets"
        >
          <Braces class="w-5 h-5 mr-3" />
          <span class="font-medium">Projets</span>
        </router-link>
        <router-link 
          to="/contact" 
          @click="isMenuOpen = false"
          class="mobile-nav-item flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Contact"
        >
          <Phone class="w-5 h-5 mr-3" />
          <span class="font-medium">Contact</span>
        </router-link>
      </div>
    </div>
  </nav>

  <!-- Espace pour la navbar fixe -->
  <div class="h-20"></div>
</template>

<style scoped>
.logo-letter {
  opacity: 0;
  transform: translateY(-20px);
}

.nav-name, .nav-title, .nav-item {
  opacity: 0;
  transform: translateY(-10px);
}

.nav-separator {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-nav-item {
  opacity: 0;
  transform: translateX(-20px);
}

/* Animation pour l'indicateur de page active */
.router-link-active {
  background-color: #374151;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.router-link-active:hover {
  background-color: #4B5563;
}

/* Animation pour le bouton menu mobile */
button {
  transition: all 0.3s ease;
}

/* Responsive pour très petits écrans */
@media (max-width: 480px) {
  .flex > div:first-child {
    font-size: 0.9rem;
  }
  
  .max-w-7xl {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Effet de transition douce pour la navbar */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}

/* Amélioration de l'accessibilité */
button:focus {
  outline: 2px solid #8B5CF6;
  outline-offset: 2px;
}

/* Animation pour les séparateurs */
.nav-separator {
  transform-origin: center center;
}
</style>