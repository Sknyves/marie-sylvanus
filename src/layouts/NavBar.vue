<script setup>
import { Braces, HomeIcon, InfoIcon, Phone, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="w-full py-4 relative bg-[#E9E1D1] shadow-sm">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo PORTFOLIO avec animation -->
      <div class="flex font-bold text-lg sm:text-xl text-neutral-800 tracking-widest">
        <span 
          v-for="(letter, index) in 'PORTFOLIO'" 
          :key="index" 
          class="inline-block animate-bounce"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          {{ letter }}
        </span>
      </div>

      <div>|</div>
      
      <!-- Nom et titre - visible à partir de md -->
      <div class="text-center flex-shrink-0 hidden md:block mx-4">
        <p class="font-semibold text-base lg:text-lg text-neutral-800 tracking-wide m-0">MARIE SYLVANUS KINKPON</p>
        <p class="text-xs lg:text-sm text-gray-500 italic mt-1 m-0">Développeur full-stack</p>
        <p class="text-xs lg:text-sm text-gray-500 italic mt-1 m-0">...de l'idée au résultat</p>
      </div>

      <div>|</div>
      
      <!-- Menu de navigation desktop -->
      <div class="hidden md:flex gap-4 lg:gap-6">
        <router-link 
          to="/" 
          class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 hover:-translate-y-0.5" 
          title="Accueil"
        >
          <HomeIcon class="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
          <span class="text-xs font-medium">Accueil</span>
        </router-link>
        <router-link 
          to="/about" 
          class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 hover:-translate-y-0.5" 
          title="À propos"
        >
          <InfoIcon class="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
          <span class="text-xs font-medium">À propos</span>
        </router-link>
        <router-link 
          to="/projets" 
          class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 hover:-translate-y-0.5" 
          title="Projets"
        >
          <Braces class="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
          <span class="text-xs font-medium">Projets</span>
        </router-link>
        <router-link 
          to="/contact" 
          class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-600 hover:-translate-y-0.5" 
          title="Contact"
        >
          <Phone class="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
          <span class="text-xs font-medium">Contact</span>
        </router-link>
      </div>

      <!-- Bouton menu mobile -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
        aria-label="Menu"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Menu mobile -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-neutral-200"
    >
      <div class="px-4 py-4 space-y-2">
        <router-link 
          to="/" 
          @click="isMenuOpen = false"
          class="flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Accueil"
        >
          <HomeIcon class="w-5 h-5 mr-3" />
          <span class="font-medium">Accueil</span>
        </router-link>
        <router-link 
          to="/about" 
          @click="isMenuOpen = false"
          class="flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="À propos"
        >
          <InfoIcon class="w-5 h-5 mr-3" />
          <span class="font-medium">À propos</span>
        </router-link>
        <router-link 
          to="/projets" 
          @click="isMenuOpen = false"
          class="flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Projets"
        >
          <Braces class="w-5 h-5 mr-3" />
          <span class="font-medium">Projets</span>
        </router-link>
        <router-link 
          to="/contact" 
          @click="isMenuOpen = false"
          class="flex items-center no-underline text-neutral-700 transition-all duration-300 p-3 rounded-lg hover:text-white hover:bg-neutral-600"
          title="Contact"
        >
          <Phone class="w-5 h-5 mr-3" />
          <span class="font-medium">Contact</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 1s ease infinite alternate;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-3px); }
}

/* Animation pour le menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Amélioration de l'accessibilité */
.router-link-active {
  background-color: #374151;
  color: #E9E1D1;
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

@media (max-width: 640px) {
  .animate-bounce {
    animation: bounce 1s ease infinite alternate;
  }
  
  @keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-2px); }
  }
}
</style>