<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
    title: "Waari Festival",
    description: "Site officiel du Waari Festival 2025",
    image: "/projects/3.png",
    technologies: ["Vue.js", "Tailwind CSS"],
    link: "https://waari-festival.vercel.app/",
    category: "Web"
  },
  {
    id: 5,
    title: "Outil de Reconnaissance Visuelle",
    description: "Application desktop avec CNN personnalisé pour la classification d'images dans le domaine industriel.",
    image: "/projects/6.png",
    technologies: ["Python", "TensorFlow", "Keras", "PyQt"],
    link: "#",
    category: "Desktop"
  },
  {
    id: 6,
    title: "Neon Mind",
    description: "Blog de développement personnel et professionnel",
    image: "/projects/4.png",
    technologies: ["HTML/CSS", "JavaScript", "PHP"],
    link: "https://neon-mind-nu.vercel.app/",
    category: "Web"
  }
]

const filters = ref(['Tous', 'Web', 'Desktop', 'IA']);
const activeFilter = ref('Tous');
const filteredProjects = ref(projects);

// Filtrer les projets
const filterProjects = (filter) => {
  activeFilter.value = filter;
  if (filter === 'Tous') {
    filteredProjects.value = projects;
  } else {
    filteredProjects.value = projects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(filter);
      }
      return project.category === filter;
    });
  }
  
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
};

// Animation des projets
const animateProjects = () => {
  gsap.to('.project-card', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });
};

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
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(".section-description", 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.4"
  )
  .fromTo(".filter-button", 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    "-=0.4"
  );
  
  // Animation des projets
  animateProjects();
  
  // Animation au scroll pour chaque projet
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
    });
  });
  
  // Animation pour les boutons de filtre
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
});
</script>

<template>
  <section id="projets" class="py-20 bg-[#E9E1D1] relative overflow-hidden">
    <!-- Éléments décoratifs d'arrière-plan -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div v-for="i in 8" :key="i" class="absolute rounded-full opacity-10"
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
          Mes Réalisations
        </h2>
        <p class="section-description text-lg text-neutral-700 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets où créativité 
          et expertise technique se rencontrent.
        </p>
      </div>

      <!-- Filtres -->
      <div class="flex justify-center mb-12 flex-wrap gap-4">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="filterProjects(filter)"
          :class="[
            'filter-button px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeFilter === filter 
              ? 'bg-neutral-800 text-white shadow-lg' 
              : 'bg-white text-neutral-700 hover:bg-neutral-100 shadow-md'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grille de projets -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card group cursor-pointer"
        >
          <!-- Carte avec fond blanc et ombre douce -->
          <div class="bg-white rounded-2xl p-3 hover:shadow-xl transition-all duration-300 h-full border border-white hover:border-[#E9E1D1] overflow-hidden">
            
            <!-- Image du projet -->
            <div class="w-full h-48 mb-6 rounded-xl overflow-hidden relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="project-image w-full h-full object-cover transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <!-- Badge de catégorie -->
              <div class="absolute top-3 right-3 px-3 py-1 bg-white rounded-full text-xs font-medium text-neutral-800 shadow-md">
                {{ Array.isArray(project.category) ? project.category[0] : project.category }}
              </div>
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
                class="px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-xs rounded-full font-medium transition-colors group-hover:bg-[#8B7B60] group-hover:text-white"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3" class="px-3 py-1 bg-[#E9E1D1] text-neutral-800 text-xs rounded-full font-medium">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>
            
            <!-- Lien discret -->
            <a
              :href="project.link"
              class="inline-flex items-center text-sm text-neutral-700 hover:text-[#8B7B60] transition-colors font-medium group/link"
              target="_blank"
            >
              <span class="mr-2 group-hover/link:underline">Voir le projet</span>
              <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Message si aucun projet ne correspond au filtre -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-neutral-600 text-lg">Aucun projet trouvé pour cette catégorie.</p>
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

/* Styles pour les transitions */
.project-card {
  opacity: 0;
  transform: translateY(20px);
}

.filter-button {
  transform: translateY(20px);
  opacity: 0;
}
</style>