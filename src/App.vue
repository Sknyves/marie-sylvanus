<script setup>
import NavBar from './layouts/NavBar.vue';
import FooterPart from './layouts/FooterPart.vue';
import { onMounted, ref, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const showScrollTop = ref(false);

// Gestion du scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
  showScrollTop.value = window.scrollY > 500;
};

// Fonction pour le défilement fluide vers le haut - Solution native
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="app-container bg-[#E9E1D1] min-h-screen flex flex-col relative">
    <!-- Navbar fixe avec effet au scroll -->
    <div class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
         :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-[#E9E1D1]'">
      <NavBar />
    </div>
    
    <!-- Espace pour la navbar fixe -->
    <div class="navbar-spacer h-20"></div>
    
    <!-- Contenu principal -->
    <main class="main-content flex-1">
      <RouterView></RouterView>
    </main>
    
    <!-- Footer -->
    <div class="footer-container">
      <FooterPart />
    </div>

    <!-- Bouton de retour en haut -->
    <button 
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-neutral-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#E9E1D1] hover:text-neutral-800"
      :class="{ 'opacity-100': showScrollTop, 'opacity-0': !showScrollTop, 'pointer-events-none': !showScrollTop }"
      aria-label="Retour en haut"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* Transition pour le bouton de retour en haut */
button {
  transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  transform: translateY(-3px) scale(1.05);
}

/* Ajustements pour les écrans mobiles */
@media (max-width: 768px) {
  .navbar-spacer {
    height: 16rem;
  }
  
  button {
    bottom: 5rem;
    right: 1.5rem;
  }
}

@media (max-width: 640px) {
  .navbar-spacer {
    height: 14rem;
  }
  
  button {
    bottom: 4rem;
    right: 1rem;
    width: 10rem;
    height: 10rem;
  }
}
</style>