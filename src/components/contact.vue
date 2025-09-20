<script setup>
import { Zap } from 'lucide-vue-next'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)

const submitForm = () => {
  isLoading.value = true
  
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
  
  // Redirection après un petit délai pour l'effet de chargement
  setTimeout(() => {
    isLoading.value = false
    window.open(whatsappUrl, '_blank')
    
    // Réinitialisation du formulaire
    formData.value = { name: '', email: '', subject: '', message: '' }
  }, 1000)
}

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488',
    url: 'https://wa.me/22943655721',
    color: 'hover:text-green-600'
  },
  {
    name: 'LinkedIn',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    url: 'https://www.linkedin.com/in/marie-sylvanus-734b432a9/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z',
    url: 'mailto:mariesyl321@gmail.com',
    color: 'hover:text-red-600'
  },
  {
    name: 'GitHub',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    url: 'https://github.com/Sknyves',
    color: 'hover:text-gray-800'
  }
]

const contactInfo = [
  {
    icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z',
    title: 'Email',
    value: 'mariesyl321@gmail.com',
    link: 'mailto:mariesyl321@gmail.com'
  },
  {
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488',
    title: 'WhatsApp',
    value: '+229 43 65 57 21',
    link: 'https://wa.me/22943655721'
  },
  {
    icon: 'M12 2c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-11c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
    title: 'Téléphone',
    value: '+229 01 43 65 57 21',
    link: 'tel:+22943655721'
  }
]
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Titre section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
          Contactez-moi
        </h2>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          Une idée de projet ? Une question ? Envoyez-moi un message directement sur WhatsApp !
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Formulaire de contact -->
        <div class="bg-[#E9E1D1] rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-6">
            Envoyez un message via WhatsApp
          </h3>

          <form @submit.prevent="submitForm" class="space-y-6">
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
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200"
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
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200"
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
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200"
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
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B7B60] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              :class="[
                'w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center',
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              ]"
            >
              <svg v-if="!isLoading" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
              </svg>
              <span v-if="!isLoading">Envoyer sur WhatsApp</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Préparation...
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
                class="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-[#E9E1D1] transition-colors duration-200 group"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-[#E9E1D1] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                  <svg class="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="info.icon" />
                  </svg>
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
                :class="['w-12 h-12 bg-[#E9E1D1] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110', social.color]"
                :aria-label="social.name"
              >
                <svg class="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Disponibilité -->
          <div class="bg-[#E9E1D1] rounded-2xl p-6">
            <h4 class="text-lg font-bold text-neutral-800 mb-3">
               <Zap class="inline-block mr-2" /> Disponibilité
            </h4>
            <p class="text-neutral-700">
              Actuellement disponible pour de nouveaux projets passionnants. 
              Réponse rapide sur WhatsApp !
            </p>
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

button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(139, 123, 96, 0.1);
}
</style>