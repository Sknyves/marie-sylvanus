<script setup>
const projects = [
  {
    id: 1,
    title: "Ivy",
    description: "Logiciel assistant du secrétariat",
    image: "/projects/7.png",
    technologies: ["Vue.js", "Django", "Tailwind CSS", "Nativefier"],
    link: "#",
    category: ["Desktop", "Web", "IA"]
  },
  {
    id: 2,
    title: "Kola Son",
    description: "Plateforme d'anciennes musiques béninoises",
    image: "/projects/2.png",
    technologies: ["Vue.js", "Tailwind CSS", "Django", "API REST"],
    link: "https://kola-son.vercel.app/",
    category: "Web"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Portfolio personnel pour présenter ses compétences et projets",
    image: "/projects/5.png",
    technologies: ["Vue.js", "Tailwind CSS"],
    link: "https://portfolio-ah-omega.vercel.app/",
    category: "Web"
  },
  {
    id: 4,
    title: "Köta",
    description: "Site de traitement de sujets avec IA faisant office d'exposés",
    image: "/projects/1.png",
    technologies: ["Vue.js", "Tailwind CSS"],
    link: "https://k-ta.vercel.app/",
    category: "Web"
  },
  {
    id: 5,
    title: "Waari Festival",
    description: "Site officiel du Waari Festival 2025",
    image: "/projects/3.png",
    technologies: ["Vue.js", "Tailwind CSS"],
    link: "https://waari-festival.vercel.app/",
    category: "Web"
  },
  {
    id: 6,
    title: "Outil de Reconnaissance Visuelle",
    description: "Application desktop avec CNN personnalisé pour la classification d'images dans le domaine industriel.",
    image: "/projects/6.png",
    technologies: ["Python", "TensorFlow", "Keras", "PyQt"],
    link: "#",
    category: "Desktop"
  },
  {
    id: 7,
    title: "Neon Mind",
    description: "Blog de développement personnel et professionnel",
    image: "/projects/4.png",
    technologies: ["HTML/CSS", "JavaScript", "PHP"],
    link: "https://neon-mind-nu.vercel.app/",
    category: "Web"
  }
]
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
          Découvrez une sélection de mes projets où créativité 
          et expertise technique se rencontrent.
        </p>
      </div>

      <!-- Grille minimaliste -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group cursor-pointer"
        >
          <!-- Carte avec fond blanc et ombre douce -->
          <div class="bg-white rounded-2xl p-3 hover:shadow-xl transition-all duration-300 h-full border border-white hover:border-[#E9E1D1]">
            
            <!-- Image du projet -->
            <div class="w-full h-48 mb-6 rounded-xl overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <!-- Contenu -->
            <h3 class="text-xl font-bold text-neutral-800 mb-3 group-hover:text-[#8B7B60] transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-neutral-600 mb-4 line-clamp-2 text-sm">
              {{ project.description }}
            </p>
            
            <!-- Badges technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-xs rounded-full font-medium"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Lien discret -->
            <a
              :href="project.link"
              class="inline-flex items-center text-sm text-neutral-700 hover:text-[#8B7B60] transition-colors font-medium"
            >
              <span class="mr-2">Voir le projet</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bouton voir plus -->
      <div class="text-center mt-16">
        <a 
          href="#contact" 
          class="inline-flex items-center px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 font-medium"
        >
          Voir tous les projets
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation subtile au survol */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>