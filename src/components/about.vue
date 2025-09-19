<script setup></script>
<template>
    <div class="justify-end flex">
        <div class="flex justify-right items-center w-full md:w-1/2">
            <svg viewBox="0 0 300 500">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#a3a3a3" />
                    <stop offset="50%" stop-color="#767c88" />
                    <stop offset="100%" stop-color="#262626" />
                    </linearGradient>
                </defs>
                <path d="M 150,50 C 250,150 50,250 150,350 C 250,450 50,550 150,650" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        stroke-width="6" />
            </svg>
            <div class="space-y-4 ">
                <p class="font-bold text-2xl text-neutral-800">À propos de moi</p>
                <p class="text-sm italic text-gray-600">Développeur full-stack passionné</p>
                <p class="mt-4 text-justify text-gray-700">
                    Bonjour! Je suis Marie Sylvanus KINKPON, un développeur full-stack passionné par la création de solutions web innovantes. Avec une expertise en JavaScript, Vue.js, Node.js, et bien d'autres technologies, je m'efforce de transformer des idées en applications fonctionnelles et esthétiques. Mon approche centrée sur l'utilisateur garantit que chaque projet que je réalise est non seulement techniquement solide, mais aussi intuitif et agréable à utiliser. Explorez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour toute collaboration ou opportunité.
                </p>
                <p class="mt-4 text-justify text-gray-700">
                    En dehors du codage, j'aime explorer les dernières tendances technologiques, contribuer à des projets open-source, et apprendre de nouvelles compétences pour rester à la pointe de l'industrie. Mon objectif est de continuer à évoluer en tant que développeur tout en apportant une valeur ajoutée à chaque projet sur lequel je travaille.
                </p>
                <router-link to="/about" class="bg-neutral-500 hover:underline border border-neutral-500 text-white py-1 px-2 rounded">En savoir plus</router-link>
            </div>
        </div>
    </div>
    
</template>