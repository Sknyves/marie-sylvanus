<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { MessageCircle, X, Send, Loader, Sparkles } from 'lucide-vue-next'
import gsap from 'gsap'

const isOpen = ref(false)
const messages = ref([])
const userMessage = ref('')
const isLoading = ref(false)
const chatContainer = ref(null)
const sessionId = ref(`session_${Math.random().toString(36).substring(7)}`)

const N8N_WEBHOOK_URL = 'https://meldev.app.n8n.cloud/webhook/e5616171-e3b5-4c39-81d4-67409f9fa60a/chat'

// Message de bienvenue
onMounted(() => {
  messages.value.push({
    type: 'bot',
    text: "👋 Bonjour ! Je suis l'assistant IA de Marie. Comment puis-je vous aider aujourd'hui ?",
    timestamp: new Date()
  })
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
  
  if (isOpen.value) {
    nextTick(() => {
      gsap.fromTo('.chat-window',
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      )
    })
  }
}

const sendMessage = async () => {
  if (!userMessage.value.trim() || isLoading.value) return

  const message = userMessage.value.trim()
  
  // Ajouter le message de l'utilisateur
  messages.value.push({
    type: 'user',
    text: message,
    timestamp: new Date()
  })
  
  userMessage.value = ''
  isLoading.value = true
  
  // Scroll vers le bas
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })

  try {
    // Appel au webhook n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'sendMessage',
        chatInput: message,
        sessionId: sessionId.value,
        timestamp: new Date().toISOString(),
        source: 'portfolio-chat'
      })
    })

    const data = await response.json()
    console.log('Réponse n8n reçue:', data)
    
    // Rechercher la réponse dans tous les formats n8n possibles
    const botText = data.output || 
                    data.text ||
                    data.response || 
                    (data.body && data.body.output) ||
                    (data.body && data.body.text) ||
                    (Array.isArray(data) && data[0].output) ||
                    (Array.isArray(data) && data[0].text) ||
                    data.message ||
                    "Merci ! Je traite votre demande.";

    // Ajouter la réponse du bot
    messages.value.push({
      type: 'bot',
      text: botText,
      timestamp: new Date()
    })
    
  } catch (error) {
    console.error('Erreur:', error)
    messages.value.push({
      type: 'bot',
      text: "Désolé, une erreur s'est produite. Vous pouvez me contacter directement sur WhatsApp : +229 01 43 65 57 21",
      timestamp: new Date()
    })
  } finally {
    isLoading.value = false
    nextTick(() => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
      }
    })
  }
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
// Fonction pour transformer le markdown simple en HTML
const formatMessage = (text) => {
  if (!text) return ''
  
  let cleanText = text
  
  // 1. EXTRACTION : On ne garde que la partie après les séparateurs de système
  const separators = ['---REPONSE---', '---RESPONSE---', '---REPONSE TEXTUELLE---']
  let foundSeparator = false
  for (const sep of separators) {
    if (cleanText.includes(sep)) {
      cleanText = cleanText.split(sep)[1]
      foundSeparator = true
      break
    }
  }

  // 2. NETTOYAGE : Si pas de séparateur, on tente de supprimer un éventuel bloc JSON au début
  if (!foundSeparator) {
    // Supprime seulement un bloc { } s'il est au tout début du texte
    cleanText = cleanText.replace(/^\s*{[\s\S]*?}\s*/, '').trim()
  }

  // Fallback de sécurité
  if (!cleanText) cleanText = text.trim()

  let formatted = cleanText
    // Titres (###)
    .replace(/^### (.*$)/gm, '<h4 class="text-base font-bold mt-4 mb-2 text-neutral-900 border-l-4 border-neutral-900 pl-3">$1</h4>')
    // Gras
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italique
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code inline
    .replace(/`(.*?)`/g, '<code class="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-[13px] font-mono border border-neutral-200/50">$1</code>')
    // Listes à puces (uniquement si en début de ligne)
    .replace(/^\s*[-*]\s+(.*)/gm, '<div class="flex gap-2 ml-1 mb-2 leading-snug"><span>•</span><span class="flex-1">$1</span></div>')
    // Liens
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-blue-600 underline hover:text-blue-700 transition-colors font-bold">$1</a>')
    // Paragraphes (double retour)
    .split(/\n\n+/).map(p => {
      const trimmed = p.trim()
      if (!trimmed) return ''
      return `<p class="mb-4 last:mb-0">${trimmed.replace(/\n/g, '<br>')}</p>`
    }).join('')
    
  return formatted
}
</script>

<template>
  <!-- Bouton flottant -->
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Fenêtre de chat -->
    <Transition name="chat">
      <div
        v-if="isOpen"
        class="chat-window absolute bottom-20 right-0 w-[400px] h-[600px] bg-white rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-gray-100/50 backdrop-blur-sm"
      >
        <!-- Header -->
        <div class="bg-neutral-900 border-b border-white/5 p-6 flex items-center justify-between relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div class="flex items-center gap-4 relative z-10">
            <div class="w-12 h-12 bg-gradient-to-tr from-neutral-200 to-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <Sparkles class="w-7 h-7 text-neutral-900" />
            </div>
            <div>
              <h3 class="text-white font-black tracking-tight text-lg">Marie Sylvanus</h3>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Assistant Intelligence</p>
              </div>
            </div>
          </div>
          <button @click="toggleChat" class="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-2xl transition-all duration-300 relative z-10">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Messages -->
        <div ref="chatContainer" class="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(circle_at_top_right,rgba(240,240,240,0.5),transparent)]">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            :class="[
              'flex flex-col',
              msg.type === 'user' ? 'items-end' : 'items-start'
            ]"
          >
            <div
              :class="[
                'max-w-[88%] px-6 py-4 shadow-sm border leading-relaxed text-[15px]',
                msg.type === 'user'
                  ? 'bg-neutral-900 text-white rounded-[24px_24px_4px_24px] border-neutral-800'
                  : 'bg-white text-neutral-800 rounded-[24px_24px_24px_4px] border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]'
              ]"
            >
              <div class="message-content" v-html="formatMessage(msg.text)"></div>
            </div>
            <span class="text-[10px] text-gray-400 mt-2 px-2 font-bold uppercase tracking-widest opacity-70">
              {{ msg.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}
            </span>
          </div>

          <!-- Loading indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
              <div class="flex gap-1.5 item-center">
                <span class="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span class="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-5 bg-white border-t border-gray-100">
          <div class="flex gap-3">
            <input
              v-model="userMessage"
              @keypress="handleKeyPress"
              type="text"
              placeholder="Décrivez votre projet..."
              class="flex-1 px-5 py-4 bg-gray-50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-sm"
              :disabled="isLoading"
            />
            <button
              @click="sendMessage"
              :disabled="!userMessage.trim() || isLoading"
              class="bg-neutral-900 text-white w-12 h-12 rounded-2xl hover:bg-neutral-800 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-neutral-900/20"
            >
              <Send class="w-5 h-5" />
            </button>
          </div>
          <p class="text-[10px] text-gray-400 mt-3 text-center font-medium uppercase tracking-wider">
            Propulsé par n8n & IA • Marie Sylvanus Kinkpon
          </p>
        </div>
      </div>
    </Transition>

    <!-- Bouton d'ouverture -->
    <button
      @click="toggleChat"
      class="bg-neutral-900 text-white w-18 h-18 w-[72px] h-[72px] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex items-center justify-center group hover:scale-105 relative border border-white/10"
    >
      <Transition name="icon">
        <div v-if="!isOpen" class="relative">
          <MessageCircle class="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-neutral-900"></span>
        </div>
        <X v-else class="w-8 h-8" />
      </Transition>
    </button>
  </div>
</template>

<style scoped>
.message-content :deep(strong) {
  font-weight: 700;
  color: inherit;
}

.message-content :deep(a) {
  font-weight: 600;
}

/* Animations */
.chat-enter-active,
.chat-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  filter: blur(10px);
}

.icon-enter-active,
.icon-leave-active {
  transition: all 0.2s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

/* Scrollbar personnalisée */
.chat-window ::-webkit-scrollbar {
  width: 6px;
}

.chat-window ::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.chat-window ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.chat-window ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Responsive */
@media (max-width: 640px) {
  .chat-window {
    width: calc(100vw - 32px);
    height: calc(100vh - 120px);
    bottom: 80px;
    right: -8px;
  }
}
</style>
