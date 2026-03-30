<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { MessageCircle, X, Send, Loader, Sparkles } from 'lucide-vue-next'
import gsap from 'gsap'

const isOpen = ref(false)
const sessionId = ref(Math.random().toString(36).substring(7))
const userMessage = ref('')
const isLoading = ref(false)
const chatContainer = ref(null)

const quickReplies = ref([
  "Quels sont tes tarifs ?",
  "Voir tes projets IA",
  "Comment collaborer ?",
  "Es-tu disponible ?"
])

const messages = ref([
  {
    type: 'bot',
    text: "Bonjour ! Je suis **Marie Sylvanus**, votre expert en développement Web et consultant IA. Prêt à propulser votre projet demain ?\n\nComment puis-je vous aider aujourd'hui ?",
    timestamp: new Date()
  }
])

const CHAT_API_URL = '/api/chat'
const APPOINTMENT_API_URL = '/api/appointment'

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

const sendMessage = async (text = null) => {
  const message = text || userMessage.value
  if (!message.trim() || isLoading.value) return

  // Ajouter le message utilisateur
  messages.value.push({
    type: 'user',
    text: message,
    timestamp: new Date()
  })

  userMessage.value = ''
  isLoading.value = true
  
  // Ajouter un message bot vide pour le streaming
  const botMessageIndex = messages.value.push({
    type: 'bot',
    text: '',
    timestamp: new Date()
  }) - 1

  nextTick(scrollToBottom)

  try {
    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatInput: message,
        history: messages.value.slice(-7, -1).map(m => ({
          role: m.type === 'user' ? 'user' : 'assistant',
          content: m.text
        })),
        stream: true
      })
    })

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let partialChunk = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunks = (partialChunk + decoder.decode(value)).split('\n\n')
      partialChunk = chunks.pop()

      for (const line of chunks) {
        if (line.startsWith('data: ')) {
          const dataStr = line.replace('data: ', '')
          if (dataStr === '[DONE]') break
          try {
            const { chunk } = JSON.parse(dataStr)
            messages.value[botMessageIndex].text += chunk
            scrollToBottom()
          } catch (e) {
            console.error('Error parsing stream chunk:', e)
          }
        }
      }
    }
  } catch (error) {
    console.error('Chat error:', error)
    messages.value[botMessageIndex].text = "Désolé, une erreur est survenue. Contactez-moi sur WhatsApp : +229 01 43 65 57 21"
  } finally {
    isLoading.value = false
  }
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
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
  
  let formatted = text
    // Échapper HTML simple
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Gras
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italique
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Tableaux (très simplifié)
    .replace(/^\|(.+)\|$/gm, (match) => {
        const cells = match.split('|').filter(c => c.trim() !== '').map(c => `<td class="border px-2 py-1">${c.trim()}</td>`).join('')
        return `<tr class="border-b">${cells}</tr>`
    })
    .replace(/(<tr.*<\/tr>)+/g, '<table class="w-full text-xs my-2 border-collapse">$1</table>')
    // Code inline
    .replace(/`(.*?)`/g, '<code class="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-[13px] font-mono border border-neutral-200/50">$1</code>')
    // Listes
    .replace(/^\s*[-*]\s+(.*)/gm, '<div class="flex gap-2 ml-1 mb-1 leading-snug"><span class="text-neutral-400">•</span><span class="flex-1">$1</span></div>')
    // Liens
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-blue-600 underline font-bold">$1</a>')
    // Paragraphes
    .split(/\n\n+/).map(p => {
      const trimmed = p.trim()
      if (!trimmed || trimmed.startsWith('<table')) return trimmed
      return `<p class="mb-3 last:mb-0">${trimmed.replace(/\n/g, '<br>')}</p>`
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
        <div class="bg-neutral-900 border-b border-white/5 p-4 sm:p-6 flex items-center justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div class="flex items-center gap-4 relative z-10">
            <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-lg transform rotate-3 bg-white border border-white/20">
              <img src="/about-photo.png" alt="Marie Sylvanus" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-white font-black tracking-tight text-lg">Marie Sylvanus</h3>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Assistant Intelligence</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 relative z-10">
            <!-- WhatsApp Icon -->
            <a 
              href="https://wa.me/2290143655721" 
              target="_blank"
              class="text-gray-400 hover:text-[#25D366] bg-white/5 hover:bg-white/10 p-2.5 rounded-2xl transition-all duration-300"
              title="WhatsApp"
            >
              <MessageCircle class="w-5 h-5" />
            </a>
            <!-- Close Button -->
            <button @click="toggleChat" class="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-2xl transition-all duration-300">
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 overflow-hidden flex flex-col bg-[radial-gradient(circle_at_top_right,rgba(240,240,240,0.5),transparent)]">
          <!-- Chat History -->
          <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div
              v-for="(msg, index) in messages"
              :key="index"
              :class="['flex flex-col', msg.type === 'user' ? 'items-end' : 'items-start']"
            >
              <div
                :class="[
                  'max-w-[88%] px-6 py-4 shadow-sm border leading-relaxed text-[15px] transform transition-all duration-300 hover:scale-[1.01]',
                  msg.type === 'user'
                    ? 'bg-neutral-900 text-white rounded-[24px_24px_4px_24px] border-neutral-800 shadow-[0_4px_15px_rgba(0,0,0,0.1)]'
                    : 'bg-white text-neutral-800 rounded-[24px_24px_24px_4px] border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]'
                ]"
              >
                <div class="message-content" v-html="formatMessage(msg.text)"></div>
              </div>
              <span class="text-[10px] text-gray-400 mt-2 px-2 font-bold uppercase tracking-widest opacity-70">
                {{ msg.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}
              </span>
            </div>
          </div>

          <!-- Bottom Actions (Quick Replies & WhatsApp) -->
          <div class="p-4 space-y-4">
            <!-- Quick Replies -->
            <div v-if="!isLoading && quickReplies.length > 0" class="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
              <button 
                v-for="reply in quickReplies" 
                :key="reply"
                @click="sendMessage(reply)"
                class="text-[11px] px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all font-bold uppercase tracking-wider shadow-sm flex-shrink-0"
              >
                {{ reply }}
              </button>
            </div>


          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 sm:p-5 bg-white border-t border-gray-100">
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
              @click="sendMessage()"
              :disabled="!userMessage.trim() || isLoading"
              class="bg-neutral-900 text-white w-12 h-12 rounded-2xl hover:bg-neutral-800 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-neutral-900/20"
            >
              <Send class="w-5 h-5" />
            </button>
          </div>
          <p class="text-[10px] text-gray-400 mt-3 text-center font-medium uppercase tracking-wider">
            Propulsé par Groq & Marie Sylvanus • Full-Stack & IA
          </p>
        </div>
      </div>
    </Transition>

    <!-- Bouton d'ouverture -->
    <button
      @click="toggleChat"
      :class="[
        'bg-neutral-900 text-white w-[72px] h-[72px] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex items-center justify-center group hover:scale-105 relative border border-white/10',
        isOpen ? 'hidden sm:flex' : 'flex'
      ]"
    >
      <Transition name="icon">
        <div v-if="!isOpen" class="relative w-full h-full flex items-center justify-center">
          <img src="/logo.png" alt="Chat" class="w-10 h-10 group-hover:scale-110 transition-transform object-contain p-1">
          <span class="absolute top-4 right-4 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-neutral-900"></span>
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
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    bottom: 0 !important;
    right: 0 !important;
    border-radius: 0 !important;
    transform: none !important;
    z-index: 1000 !important;
  }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
