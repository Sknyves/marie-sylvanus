<script setup>
import { Braces, HomeIcon, InfoIcon, Phone } from 'lucide-vue-next';
</script>

<template>
  <nav class="w-full py-4 relative ">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-4">
      <!-- Logo PORTFOLIO avec animation -->
      <div class="flex font-bold text-xl text-neutral-800 tracking-widest">
        <span 
          v-for="(letter, index) in 'PORTFOLIO'" 
          :key="index" 
          class="inline-block animate-bounce"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          {{ letter }}
        </span>
      </div>
      
      <!-- Séparateur -->
      <div class="hidden md:block h-10 w-px bg-neutral-600 mx-6"></div>
      
      <!-- Nom et titre -->
      <div class="text-center flex-shrink-0 hidden md:block">
        <p class="font-semibold text-lg text-neutral-800 tracking-widest m-0">MARIE SYLVANUS KINKPON</p>
        <p class="text-sm text-gray-500 italic mt-1 m-0">Développeur full-stack</p>
        <p class="text-sm text-gray-500 italic mt-1 m-0">...de l'idée au résultat</p>
      </div>
      
      <!-- Séparateur -->
      <div class="hidden md:block h-10 w-px bg-neutral-600 mx-6 -mr-24"></div>
      
      <!-- Menu de navigation -->
      <div class="flex gap-6 md:gap-4">
        <router-link to="/" class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-500 hover:-translate-y-0.5" title="Accueil">
          <HomeIcon class="w-6 h-6 mb-1" />
          <span class="text-xs font-medium hidden sm:block">Accueil</span>
        </router-link>
        <router-link to="/about" class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-500 hover:-translate-y-0.5" title="À propos">
          <InfoIcon class="w-6 h-6 mb-1" />
          <span class="text-xs font-medium hidden sm:block">À propos</span>
        </router-link>
        <router-link to="/projets" class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-500 hover:-translate-y-0.5" title="Projets">
          <Braces class="w-6 h-6 mb-1" />
          <span class="text-xs font-medium hidden sm:block">Projets</span>
        </router-link>
        <router-link to="/contact" class="flex flex-col items-center no-underline text-neutral-700 transition-all duration-300 p-2 rounded-lg hover:text-white hover:bg-neutral-500 hover:-translate-y-0.5" title="Contact">
          <Phone class="w-6 h-6 mb-1" />
          <span class="text-xs font-medium hidden sm:block">Contact</span>
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
  100% { transform: translateY(-5px); }
}

/* Responsive pour très petits écrans */
@media (max-width: 480px) {
  .max-w-7xl {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex > div:first-child {
    font-size: 1.1rem;
  }
}
</style>