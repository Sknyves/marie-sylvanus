<script setup>
import { ExternalLink, Github, Eye, Code } from 'lucide-vue-next';
import { ref, computed } from 'vue';

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

const filteredProjects = computed(() => {
  if (selectedCategory.value === "Tous") {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <section id="projets" class="py-20 bg-[#E9E1D1]">
    <div class="container mx-auto px-4">
      <!-- Titre section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
          Mes Réalisations
        </h2>
        <p class="text-lg text-neutral-700 max-w-2xl mx-auto">
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
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium',
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
          class="group cursor-pointer"
        >
          <!-- Carte projet -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            
            <!-- Image du projet -->
            <div class="relative overflow-hidden aspect-video">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              <!-- Badge catégorie -->
              <span class="absolute top-4 left-4 px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-sm font-medium rounded-full">
                {{ project.category }}
              </span>
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
                  class="px-3 py-1 bg-[#E9E1D1] bg-opacity-50 text-neutral-800 text-xs rounded-full font-medium"
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
                  class="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 flex-1 justify-center"
                >
                  <Github class="w-4 h-4" />
                  <span class="text-sm">Code</span>
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-300 flex-1 justify-center"
                >
                  <Eye class="w-4 h-4" />
                  <span class="text-sm">Démo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <Code class="w-16 h-16 text-neutral-800 mx-auto mb-6" />
          <h3 class="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Prêt à collaborer sur un projet ?
          </h3>
          <p class="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Vous avez une idée de projet ou souhaitez discuter d'une collaboration ? 
            Je suis disponible pour transformer vos concepts en solutions concrètes.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 font-medium"
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

/* Animation subtile au survol */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
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