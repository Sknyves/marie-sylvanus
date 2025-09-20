<script setup>
import { Zap, Send, MessageCircle, Mail, Phone, Github, Linkedin } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)

const submitForm = () => {
  isLoading.value = true
  
  // Animation du bouton pendant l'envoi
  gsap.to('.submit-button', {
    scale: 0.95,
    duration: 0.3,
    onComplete: () => {
      // Préparation du message WhatsApp
      const whatsappMessage = `
*Nouveau message de ${formData.value.name}*

📧 *Email:* ${formData.value.email}
📋 *Sujet:* ${formData.value.subject}

💬 *Message:*
${formData.value.message}

_Message envoyé via le portfolio MELDEV_
      `.trim()

      // Encodage du message pour URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      
      // Numéro WhatsApp (22943655721)
      const whatsappNumber = '22943655721'
      
      // Création du lien WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      
      // Animation de confirmation avant redirection
      const tl = gsap.timeline({
        onComplete: () => {
          window.open(whatsappUrl, '_blank')
          
          // Réinitialisation du formulaire avec animation
          gsap.to('.form-input, .form-textarea', {
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            onComplete: () => {
              formData.value = { name: '', email: '', subject: '', message: '' }
              gsap.to('.form-input, .form-textarea', {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
              })
            }
          })
          
          isLoading.value = false
          gsap.to('.submit-button', {
            scale: 1,
            duration: 0.3
          })
        }
      })
      
      tl.to('.submit-button', {
        backgroundColor: '#10B981',
        duration: 0.5
      })
      .to('.submit-button', {
        scale: 1.05,
        duration: 0.3
      })
    }
  })
}

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/22943655721',
    color: 'hover:text-green-600',
    bgColor: 'bg-green-100 hover:bg-green-200'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/marie-sylvanus-734b432a9/',
    color: 'hover:text-blue-600',
    bgColor: 'bg-blue-100 hover:bg-blue-200'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:mariesyl321@gmail.com',
    color: 'hover:text-red-600',
    bgColor: 'bg-red-100 hover:bg-red-200'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Sknyves',
    color: 'hover:text-gray-800',
    bgColor: 'bg-gray-100 hover:bg-gray-200'
  }
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mariesyl321@gmail.com',
    link: 'mailto:mariesyl321@gmail.com'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+229 43 65 57 21',
    link: 'https://wa.me/22943655721'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+229 01 43 65 57 21',
    link: 'tel:+22943655721'
  }
]

onMounted(() => {
  // Animation d'entrée de la section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.fromTo(".section-title", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(".section-description", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.4"
  )
  .fromTo(".contact-card", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
    "-=0.4"
  )
  .fromTo(".contact-info-item", 
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
    "-=0.5"
  )
  .fromTo(".social-icon", 
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
    "-=0.3"
  )
  .fromTo(".availability-card", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.3"
  );

  // Animation des inputs au focus
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        scale: 1.02,
        boxShadow: '0 0 0 3px rgba(139, 123, 96, 0.2)',
        duration: 0.3
      });
    });
    
    input.addEventListener('blur', () => {
      gsap.to(input, {
        scale: 1,
        boxShadow: '0 0 0 0 rgba(139, 123, 96, 0.2)',
        duration: 0.3
      });
    });
  });

  // Animation des cartes de contact au survol
  const contactItems = document.querySelectorAll('.contact-info-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animation des icônes sociales au survol
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
});
</script>

<template>
  <section id="contact" class="py-20 bg-white relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
      <div v-for="i in 15" :key="i" class="absolute rounded-full"
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
      <!-- Titre section -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
          Contactez-moi
        </h2>
        <p class="section-description text-lg text-neutral-600 max-w-2xl mx-auto">
          Une idée de projet ? Une question ? Envoyez-moi un message directement sur WhatsApp !
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Formulaire de contact -->
        <div class="contact-card bg-[#E9E1D1] rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <!-- Élément décoratif -->
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white opacity-20"></div>
          <div class="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white opacity-20"></div>
          
          <h3 class="text-2xl font-bold text-neutral-800 mb-6 relative z-10">
            Envoyez un message via WhatsApp
          </h3>

          <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
                  Nom complet *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Votre nom"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="votre@email.com"
                >
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-neutral-700 mb-2">
                Sujet *
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200 bg-white"
                placeholder="Sujet de votre message"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200 resize-none bg-white"
                placeholder="Décrivez votre projet ou votre demande..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              :class="[
                'submit-button w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center relative overflow-hidden',
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              ]"
            >
              <span class="flex items-center justify-center relative z-10">
                <MessageCircle v-if="!isLoading" class="w-5 h-5 mr-2" />
                <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="!isLoading">Envoyer sur WhatsApp</span>
                <span v-else>Préparation...</span>
              </span>
            </button>

            <p class="text-sm text-neutral-600 text-center">
              Le message s'ouvrira dans WhatsApp avec tous les détails pré-remplis
            </p>
          </form>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <!-- Coordonnées -->
          <div>
            <h3 class="text-2xl font-bold text-neutral-800 mb-6">
              Mes coordonnées
            </h3>
            
            <div class="space-y-4">
              <a
                v-for="(info, index) in contactInfo"
                :key="index"
                :href="info.link"
                target="_blank"
                class="contact-info-item flex items-center p-4 rounded-lg bg-gray-50 hover:bg-[#E9E1D1] transition-colors duration-200 group shadow-md hover:shadow-lg"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-[#E9E1D1] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-200 shadow-inner">
                  <component :is="info.icon" class="w-6 h-6 text-neutral-800" />
                </div>
                <div class="ml-4">
                  <p class="font-medium text-neutral-800">{{ info.title }}</p>
                  <p class="text-neutral-600">{{ info.value }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div>
            <h3 class="text-2xl font-bold text-neutral-800 mb-6">
              Suivez-moi
            </h3>
            
            <div class="flex gap-4">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.url"
                target="_blank"
                :class="['social-icon w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md', social.bgColor]"
                :aria-label="social.name"
              >
                <component :is="social.icon" :class="['w-6 h-6 text-neutral-800', social.color]" />
              </a>
            </div>
          </div>

          <!-- Disponibilité -->
          <div class="availability-card bg-[#E9E1D1] rounded-2xl p-6 shadow-lg">
            <h4 class="text-lg font-bold text-neutral-800 mb-3 flex items-center">
              <Zap class="inline-block mr-2 text-yellow-600" /> Disponibilité
            </h4>
            <p class="text-neutral-700">
              Actuellement disponible pour de nouveaux projets passionnants. 
              Réponse rapide sur WhatsApp !
            </p>
            <div class="mt-4 flex items-center">
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
              <span class="text-sm text-green-700 font-medium">En ligne</span>
            </div>
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

.submit-button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(139, 123, 96, 0.2);
}

.contact-card, .availability-card {
  opacity: 0;
  transform: translateY(40px);
}

.contact-info-item, .social-icon {
  opacity: 0;
}

.section-title, .section-description {
  opacity: 0;
  transform: translateY(30px);
}
</style>