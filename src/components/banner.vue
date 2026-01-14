 <script setup>
import { Github } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const bannerImage = '/banner.png'
const logoImage = '/logo.png'
const frameImage = '/frame.png'

const bannerContainer = ref(null);

onMounted(() => {
  // Animation d'entrée des éléments
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });
  
  tl.fromTo(".title-text", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(".main-image", 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2 },
    "-=0.4"
  )
  .fromTo(".logo-card", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.6"
  )
  .fromTo(".quote-text", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(".qr-code", 
    { scale: 0, rotation: -45 },
    { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" }
  )
  .fromTo(".github-icon", 
    { scale: 0 },
    { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
  )
  .fromTo(".copyright", 
    { opacity: 0 },
    { opacity: 1, duration: 0.6 }
  );

  // Animation au scroll pour les conteneurs
  gsap.utils.toArray('.card-container').forEach(container => {
    gsap.fromTo(container,
      { y: 50, opacity: 0.7 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Effet de parallaxe sur l'image principale
  gsap.to(".main-image", {
    y: -30,
    scrollTrigger: {
      trigger: ".main-image",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Animation d'interaction pour le logo
  const logoCard = document.querySelector('.logo-card');
  if (logoCard) {
    logoCard.addEventListener('mouseenter', () => {
      gsap.to(logoCard, {
        y: -5,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
    
    logoCard.addEventListener('mouseleave', () => {
      gsap.to(logoCard, {
        y: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
        duration: 0.3
      });
    });
  }

  // Animation pour l'icône GitHub
  const githubIcon = document.querySelector('.github-icon');
  if (githubIcon) {
    githubIcon.addEventListener('mouseenter', () => {
      gsap.to(githubIcon, {
        rotation: 360,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  }
});
</script>

<template>
    <div ref="bannerContainer" class="flex flex-col lg:flex-row p-4 h-auto min-h-screen items-center justify-center gap-8 md:gap-16 mt-16 md:mt-24">
        <div class="card-container relative w-full lg:w-1/2 h-[120vh] lg:h-[120vh] flex flex-col items-center justify-center border border-neutral-300 rounded-lg shadow-lg overflow-hidden">
            <h1 class="title-text text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 text-center mb-4 md:mb-8 px-4">
                MARIE SYLVANUS KINKPON<br>
                <span class="text-xl md:text-2xl font-normal mt-2 block">Développeur Full-Stack</span>
            </h1>
            
            <img 
                :src="bannerImage" 
                alt="Marie Sylvanus KINKPON - Développeur Full-Stack Portfolio" 
                class="main-image w-48 md:w-64 lg:w-80 h-auto object-cover brightness-75 mb-16 md:mb-32 transform transition-transform duration-700 hover:scale-105"
                loading="eager"
                width="320"
                height="320"
            >
            
            <div class="absolute bottom-4 flex justify-center w-full px-4">
                <div class="logo-card flex flex-col items-center bg-[#E9E1D1] bg-opacity-80 backdrop-blur-md px-4 py-3 rounded-lg shadow-md text-neutral-800 text-center cursor-pointer transition-all duration-300">
                    <img 
                        :src="logoImage" 
                        alt="Logo MELDEV - Développement Web" 
                        class="w-16 h-16 md:w-20 md:h-20 object-cover"
                        width="80"
                        height="80"
                    >
                    <p class="font-semibold text-sm md:text-base mt-2">MELDEV</p>
                    <p class="text-xs md:text-sm">2026</p>
                </div>
            </div>
        </div>
        
        <div class="card-container relative w-full lg:w-1/2 h-[120vh] lg:h-[120vh] flex flex-col items-center justify-center border border-neutral-300 rounded-lg shadow-lg overflow-hidden">
            <p class="quote-text text-lg md:text-xl text-neutral-700 italic text-center p-6 lg:p-8">
                « La programmation n'est pas une question d'outils, de langages ou de frameworks. Il s'agit de résoudre des problèmes. »
            </p>
            
            <div class="absolute bottom-4 left-4 w-full flex items-center justify-start">
                <img 
                    :src="frameImage" 
                    alt="code QR" 
                    class="qr-code w-16 h-16 md:w-20 md:h-20 object-cover"
                >
                <Github class="github-icon w-5 h-5 md:w-6 md:h-6 text-neutral-800 border border-neutral-800 rounded-full p-1 ml-4 cursor-pointer" />
            </div>
            
            <p class="copyright absolute bottom-4 right-4 text-xs md:text-sm text-neutral-600 text-right">
                Copyright © 2025 MELDEV. <br>Tous droits réservés.
            </p>
        </div>
    </div>
</template>

<style scoped>
/* Assure que les cartes aient une hauteur minimale sur mobile */
@media (max-width: 1024px) {
    .min-h-screen {
        min-height: auto;
    }
    
    .h-96 {
        height: 24rem;
    }
}

/* Ajustements pour très petits écrans */
@media (max-width: 640px) {
    .h-96 {
        height: 20rem;
    }
    
    .gap-8 {
        gap: 2rem;
    }
    
    .p-4 {
        padding: 1rem;
    }
}

/* Styles supplémentaires pour les animations */
.card-container {
  transform: translateY(0);
  transition: box-shadow 0.3s ease;
}

.card-container:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.logo-card:hover {
  transform: translateY(-2px);
}
</style>