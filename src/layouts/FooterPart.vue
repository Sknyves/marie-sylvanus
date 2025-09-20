<script setup>
import { Heart, Code, Mail, Phone, MapPin, Github, Linkedin, Facebook, ArrowUp } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const currentYear = new Date().getFullYear();
const showScrollTop = ref(false);

const quickLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projets' },
  { name: 'Contact', path: '/contact' }
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Sknyves',
    color: 'hover:text-gray-800 dark:hover:text-white',
    bgColor: 'bg-neutral-700 hover:bg-[#E9E1D1]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/marie-sylvanus-734b432a9/',
    color: 'hover:text-blue-600',
    bgColor: 'bg-neutral-700 hover:bg-[#E9E1D1]'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    color: 'hover:text-blue-800',
    bgColor: 'bg-neutral-700 hover:bg-[#E9E1D1]'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:mariesyl321@gmail.com',
    color: 'hover:text-red-500',
    bgColor: 'bg-neutral-700 hover:bg-[#E9E1D1]'
  }
];

const contactInfo = [
  {
    icon: Phone,
    text: '+229 01 43 65 57 21',
    link: 'tel:+2290143655721'
  },
  {
    icon: Mail,
    text: 'mariesyl321@gmail.com',
    link: 'mailto:mariesyl321@gmail.com'
  },
  {
    icon: MapPin,
    text: 'Cotonou, Bénin',
    link: '#'
  }
];

const services = [
  'Développement Web',
  'Applications Mobile',
  'UI/UX Design',
  'Consulting Tech'
];

// Fonction pour remonter en haut de page
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power2.inOut"
  });
};

// Observer le défilement pour afficher le bouton de retour en haut
onMounted(() => {
  window.addEventListener('scroll', () => {
    showScrollTop.value = window.scrollY > 500;
  });

  // Animation d'entrée du footer
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  tl.fromTo(".footer-section", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(".footer-brand", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.4"
  )
  .fromTo(".footer-logo", 
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
    "-=0.3"
  )
  .fromTo(".footer-link", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    "-=0.4"
  )
  .fromTo(".footer-service", 
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
    "-=0.3"
  )
  .fromTo(".footer-contact", 
    { x: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
    "-=0.3"
  )
  .fromTo(".social-icon", 
    { scale: 0 },
    { scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" },
    "-=0.2"
  )
  .fromTo(".footer-bottom", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.3"
  );

  // Animation des éléments au survol
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        y: -5,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animation des liens de service
  const serviceItems = document.querySelectorAll('.footer-service');
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        x: 5,
        color: '#E9E1D1',
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        color: '#D1D5DB',
        duration: 0.3
      });
    });
  });
});
</script>

<template>
  <footer class="bg-neutral-800 text-white pt-16 pb-8 relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div v-for="i in 8" :key="i" class="absolute rounded-full"
        :style="{
          width: `${Math.random() * 80 + 20}px`,
          height: `${Math.random() * 80 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'linear-gradient(135deg, #8B7B60 0%, #E9E1D1 100%)'
        }">
      </div>
    </div>

    <!-- Bouton de retour en haut -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#E9E1D1] text-neutral-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-neutral-700 hover:text-[#E9E1D1] scroll-top-button"
      aria-label="Retour en haut"
    >
      <ArrowUp class="w-6 h-6" />
    </button>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Contenu principal du footer -->
      <div class="footer-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-6">
            <div class="footer-logo w-17 h-17 bg-[#E9E1D1] rounded-full flex items-center justify-center mr-3 shadow-lg">
              <div class="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-[#E9E1D1] font-bold text-lg">
                MS
              </div>
            </div>
            <h3 class="footer-brand text-2xl font-bold text-[#E9E1D1]">MELDEV</h3>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Développeur full-stack passionné par la création de solutions innovantes 
            qui transforment les idées en réalité numérique.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="['social-icon w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md', social.bgColor, social.color]"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h4 class="text-lg font-semibold text-[#E9E1D1] mb-6">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <router-link
                :to="link.path"
                class="footer-link text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 flex items-center group"
              >
                <span class="w-2 h-2 bg-[#E9E1D1] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-[#E9E1D1] mb-6">Services</h4>
          <ul class="space-y-3">
            <li 
              v-for="(service, index) in services" 
              :key="index"
              class="footer-service text-gray-300 transition-all duration-300 cursor-pointer"
            >
              {{ service }}
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-[#E9E1D1] mb-6">Contact</h4>
          <div class="space-y-4">
            <a
              v-for="(contact, index) in contactInfo"
              :key="index"
              :href="contact.link"
              class="footer-contact flex items-center text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 group"
            >
              <component :is="contact.icon" class="w-5 h-5 mr-3 text-[#E9E1D1] group-hover:scale-110 transition-transform duration-300" />
              <span>{{ contact.text }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-neutral-700 my-8"></div>

      <!-- Bottom Bar -->
      <div class="footer-bottom flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-gray-400 text-sm text-center md:text-left">
          © {{ currentYear }} MELDEV. Tous droits réservés.
        </p>
        
        <div class="flex items-center space-x-6 text-gray-400">
          <a href="#" class="text-sm hover:text-[#E9E1D1] transition-colors duration-300">
            Politique de confidentialité
          </a>
          <a href="#" class="text-sm hover:text-[#E9E1D1] transition-colors duration-300">
            Conditions d'utilisation
          </a>
        </div>

        <div class="flex items-center text-gray-400 text-sm">
          <span>Made with</span>
          <Heart class="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
          <span>by MELDEV</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

/* Animation pour les liens */
.router-link-active {
  color: #E9E1D1;
}

.router-link-active span {
  opacity: 1;
}

/* Animation pour le bouton de retour en haut */
.scroll-top-button {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.scroll-top-button:hover {
  transform: translateY(-5px);
}

/* Classes pour les animations GSAP */
.footer-section,
.footer-brand,
.footer-logo,
.footer-link,
.footer-service,
.footer-contact,
.footer-bottom {
  opacity: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .flex-col {
    align-items: center;
    text-align: center;
  }
  
  .space-y-4 > * {
    justify-content: center;
  }
  
  .scroll-top-button {
    bottom: 4rem;
    right: 1rem;
  }
}
</style>