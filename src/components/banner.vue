<script setup>
import { Github } from 'lucide-vue-next';

const bannerImage = '/banner.png'
const logoImage = '/logo.png'
const frameImage = '/frame.png'
</script>

<template>
    <div class="flex flex-col lg:flex-row p-4 h-auto min-h-screen items-center justify-center gap-8 md:gap-16 mt-16 md:mt-24">
        <!-- Première carte - Citation -->
        <div class="relative w-full lg:w-1/2 h-[120vh] lg:h-[120vh] flex flex-col items-center justify-center border border-neutral-300 rounded-lg shadow-lg ">
            <p class="text-lg md:text-xl text-neutral-700 italic text-center p-6 lg:p-8">
                « La programmation n'est pas une question d'outils, de langages ou de frameworks. Il s'agit de résoudre des problèmes. »
            </p>
            
            <div class="absolute bottom-4 left-4 w-full flex items-center justify-start">
                <img 
                    :src="frameImage" 
                    alt="code QR" 
                    class="w-16 h-16 md:w-20 md:h-20 object-cover"
                >
                <Github class="w-5 h-5 md:w-6 md:h-6 text-neutral-800 border border-neutral-800 rounded-full p-1 ml-4" />
            </div>
            
            <p class="absolute bottom-4 right-4 text-xs md:text-sm text-neutral-600 text-right">
                Copyright © 2025 MELDEV. <br>Tous droits réservés.
            </p>
        </div>

        <!-- Deuxième carte - Portfolio -->
        <div class="relative w-full lg:w-1/2 h-[120vh] lg:h-[120vh] flex flex-col items-center justify-center border border-neutral-300 rounded-lg shadow-lg ">
            <p class="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 text-center mb-4 md:mb-8 px-4">
                MON PORTFOLIO
            </p>
            
            <img 
                :src="bannerImage" 
                alt="Bannière principale MELDEV 2025" 
                class="w-48 md:w-64 lg:w-80 h-auto object-cover brightness-75 mb-16 md:mb-32"
                loading="lazy"
            >
            
            <div class="absolute bottom-4 flex justify-center w-full px-4">
                <div class="flex flex-col items-center bg-[#E9E1D1] bg-opacity-80 backdrop-blur-md px-4 py-3 rounded-lg shadow-md text-neutral-800 text-center">
                    <img 
                        :src="logoImage" 
                        alt="Logo MELDEV" 
                        class="w-16 h-16 md:w-20 md:h-20 object-cover"
                    >
                    <p class="font-semibold text-sm md:text-base mt-2">MELDEV</p>
                    <p class="text-xs md:text-sm">2025</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Assure que les cartes aient une hauteur minimale sur mobile */
@media (max-width: 1024px) {
    .min-h-screen {
        min-height: auto;
    }
    
    .h-96 {
        height: 24rem;
    }
}

/* Ajustements pour très petits écrans */
@media (max-width: 640px) {
    .h-96 {
        height: 20rem;
    }
    
    .gap-8 {
        gap: 2rem;
    }
    
    .p-4 {
        padding: 1rem;
    }
}
</style>