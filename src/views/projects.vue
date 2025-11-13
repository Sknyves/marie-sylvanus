<script setup>
import { ExternalLink, Github, Eye, Code, Zap, Sparkles } from 'lucide-vue-next';
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Application gestion commande en ligne",
    description: "Plateforme de restauration complète avec panier, paiement et dashboard admin. Interface moderne avec TailwindCSS et état géré par Pinia.",
    image: "/projects/1.png",
    technologies: ["Vue.js", "TailwindCSS", "Pinia", "Node.js", "MongoDB"],
    github: "https://github.com/Sknyves/ecommerce-vue",
    demo: "https://any-frontend.vercel.app/",
    category: "Web"
  },
  {
    id: 7,
    title: "Coffee App",
    description: "Site web pour une application de café.",
    image: "/projects/13.png",
    technologies: ["Vue.js", "TailwindCSS"],
    github: "https://github.com/Sknyves/coffee",
    demo: "https://coffee-xi-two.vercel.app/",
    category: "Web"
  },
  {
    id: 8,
    title: "LBM-Drive",
    description: "Site web de location de voiture pour la société LBM-Drive.",
    image: "/projects/14.png",
    technologies: ["Vue.js", "TailwindCSS", "GSAP", "JavaScript"],
    github: "https://github.com/Sknyves/lbm-drive",
    demo: "https://lbm-drive.vercel.app/",
    category: "Web"
  },
  {
    id: 2,
    title: "Système de Computer Vision",
    description: "Application de reconnaissance d'images et traitement vidéo en temps réel utilisant TensorFlow et OpenCV avec interface Python.",
    image: "/projects/8.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "Django", "JavaScript"],
    github: "https://github.com/Sknyves/computer-vision",
    demo: "#",
    category: "IA"
  },
  {
    id: 3,
    title: "Application Desktop C++",
    description: "Logiciel native performant développé en C++ avec Qt pour le traitement de données et visualisation avancée.",
    image: "/projects/9.png",
    technologies: ["C++", "Qt", "CMake", "Python", "SQLite"],
    github: "https://github.com/Sknyves/cpp-desktop-app",
    demo: "#",
    category: "Desktop"
  },
  {
    id: 4,
    title: "API REST Django",
    description: "API robuste et scalable développée avec Django REST framework, incluant authentication JWT et documentation Swagger.",
    image: "/projects/11.png",
    technologies: ["Django", "Python", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/Sknyves/django-api",
    demo: "#",
    category: "Backend"
  },
  {
    id: 5,
    title: "IVY",
    description: "Logiciel assitant du secrétaire.",
    image: "/projects/7.png",
    technologies: ["Nativefier", "Electron", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Sknyves/nativefier-apps",
    demo: "#",
    category: "Desktop"
  },
  {
    id: 6,
    title: "Dashboard TensorFlow Analytics",
    description: "Tableau de bord interactif pour la visualisation de modèles de machine learning et données en temps réel.",
    image: "/projects/12.png",
    technologies: ["TensorFlow", "Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/Sknyves/tf-dashboard",
    demo: "#",
    category: "IA"
  }
]

const categories = ["Tous", "Web", "IA", "Desktop", "Backend"]
const selectedCategory = ref("Tous")
const filterButtons = ref(null)

const filteredProjects = computed(() => {
  if (selectedCategory.value === "Tous") {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

// Animation des filtres et projets
onMounted(() => {
  // Animation d'entrée de la section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projets",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.fromTo(".section-title", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" }
  )
  .fromTo(".section-description", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    "-=0.4"
  )
  .fromTo(".filter-button", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    "-=0.4"
  );

  // Animation des projets
  animateProjects();

  // Animation des filtres au survol
  const buttons = document.querySelectorAll('.filter-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        y: -3,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animation du CTA
  gsap.fromTo(".cta-section",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

// Fonction pour animer les projets
const animateProjects = () => {
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animation d'interaction pour les cartes de projet
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector('.project-image'), {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(card.querySelector('.project-badge'), {
        y: -5,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card.querySelector('.project-image'), {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(card.querySelector('.project-badge'), {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });

  // Animation des boutons d'action
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}

// Fonction pour filtrer les projets avec animation
const filterProjects = (category) => {
  selectedCategory.value = category;
  
  // Animation de filtrage
  gsap.to('.project-card', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      // Réorganiser les projets après le filtrage
      setTimeout(() => {
        animateProjects();
      }, 100);
    }
  });
}
</script>

<template>
  <section id="projets" class="py-20 bg-[#E9E1D1] relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
      <div v-for="i in 15" :key="i" class="absolute rounded-full"
        :style="{
          width: `${Math.random() * 80 + 20}px`,
          height: `${Math.random() * 80 + 20}px`,
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
          Mes Réalisations
        </h2>
        <p class="section-description text-lg text-neutral-700 max-w-2xl mx-auto">
          Découvrez une sélection de projets où j'ai mis en œuvre mes compétences 
          en développement full-stack, IA et technologies modernes.
        </p>
      </div>

      <!-- Filtres -->
      <div class="flex justify-center mb-12">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterProjects(category)"
            :class="[
              'filter-button px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium',
              selectedCategory === category
                ? 'bg-white border-neutral-800 text-neutral-800 shadow-md'
                : 'border-white text-neutral-700 hover:border-neutral-800 hover:text-neutral-800'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Grille de projets -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card group cursor-pointer opacity-0"
        >
          <!-- Carte projet -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            
            <!-- Image du projet -->
            <div class="relative overflow-hidden aspect-video">
              <img
                :src="project.image"
                :alt="project.title"
                class="project-image w-full h-full object-cover transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              <!-- Badge catégorie -->
              <span class="project-badge absolute top-4 left-4 px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-sm font-medium rounded-full shadow-md">
                {{ project.category }}
              </span>

              <!-- Overlay d'actions -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-3">
                  <a
                    :href="project.github"
                    target="_blank"
                    class="action-btn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-800 hover:text-white transition-colors duration-300"
                    title="Voir le code"
                  >
                    <Github class="w-5 h-5" />
                  </a>
                  <a
                    :href="project.demo"
                    target="_blank"
                    class="action-btn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-800 hover:text-white transition-colors duration-300"
                    title="Voir la démo"
                  >
                    <Eye class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Contenu -->
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-neutral-800 mb-3 group-hover:text-[#8B7B60] transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-neutral-600 mb-4 line-clamp-3 flex-1">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  class="px-3 py-1 bg-[#E9E1D1] bg-opacity-50 text-neutral-800 text-xs rounded-full font-medium transition-colors group-hover:bg-opacity-70"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 4" class="px-2 py-1 text-neutral-600 text-xs">
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>
              
              <!-- Actions -->
              <div class="flex gap-3 pt-4 border-t border-gray-100">
                <a
                  :href="project.github"
                  target="_blank"
                  class="action-btn flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all duration-300 flex-1 justify-center"
                >
                  <Github class="w-4 h-4" />
                  <span class="text-sm">Code</span>
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="action-btn flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-all duration-300 flex-1 justify-center"
                >
                  <Eye class="w-4 h-4" />
                  <span class="text-sm">Démo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message si aucun projet -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <Zap class="w-16 h-16 text-neutral-400 mx-auto mb-4" />
        <p class="text-xl text-neutral-600">Aucun projet trouvé dans cette catégorie.</p>
      </div>

      <!-- Call to action -->
      <div class="cta-section text-center mt-16 opacity-0">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <!-- Élément décoratif -->
          <div class="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#E9E1D1] opacity-30"></div>
          <div class="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-[#E9E1D1] opacity-30"></div>
          
          <Code class="w-16 h-16 text-neutral-800 mx-auto mb-6 relative z-10" />
          <h3 class="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 relative z-10">
            Prêt à collaborer sur un projet ?
          </h3>
          <p class="text-neutral-600 mb-8 max-w-2xl mx-auto relative z-10">
            Vous avez une idée de projet ou souhaitez discuter d'une collaboration ? 
            Je suis disponible pour transformer vos concepts en solutions concrètes.
          </p>
          <router-link
            to="/contact"
            class="action-btn inline-flex items-center px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all duration-300 font-medium relative z-10"
          >
            Discutons de votre projet
            <ExternalLink class="w-5 h-5 ml-2" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Classes pour les animations GSAP */
.section-title,
.section-description,
.filter-button,
.project-card,
.cta-section {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .gap-8 {
    gap: 1.5rem;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .flex-wrap {
    justify-content: center;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>