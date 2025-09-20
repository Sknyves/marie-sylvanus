<script setup>
import { Heart, Code, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

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
    url: 'https://github.com/meldev',
    color: 'hover:text-gray-800 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/meldev',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/meldev',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@meldev.com',
    color: 'hover:text-red-500'
  }
];

const contactInfo = [
  {
    icon: Phone,
    text: '+229 43 65 57 21',
    link: 'tel:+22943655721'
  },
  {
    icon: Mail,
    text: 'contact@meldev.com',
    link: 'mailto:contact@meldev.com'
  },
  {
    icon: MapPin,
    text: 'Cotonou, Bénin',
    link: '#'
  }
];
</script>

<template>
  <footer class="bg-neutral-800 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <!-- Contenu principal du footer -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-6">
            <div class="w-17 h-17 bg-[#E9E1D1] rounded-full flex items-center justify-center mr-3">
              <img src="/logo.png" alt="logo" class="w-16 h-auto" />
            </div>
            <h3 class="text-2xl font-bold text-[#E9E1D1]">MELDEV</h3>
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
              :class="['w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#E9E1D1] hover:scale-110', social.color]"
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
                class="text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 flex items-center group"
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
            <li class="text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 cursor-pointer">
              Développement Web
            </li>
            <li class="text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 cursor-pointer">
              Applications Mobile
            </li>
            <li class="text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 cursor-pointer">
              UI/UX Design
            </li>
            <li class="text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 cursor-pointer">
              Consulting Tech
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
              class="flex items-center text-gray-300 hover:text-[#E9E1D1] transition-colors duration-300 group"
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
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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

/* Responsive design */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-2xl {
    text-size: 1.5rem;
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
}
</style>