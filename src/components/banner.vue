<script setup>
// Optionnel : vous pourriez rendre les chemins d'images dynamiques
const bannerImage = '/banner.png'
const logoImage = '/logo.png'
const frameImage = '/frame.png'
</script>

<template>
    <div class="flex p-4 h-auto w-full h-[120vh] flex items-center justify-center gap-8 md:gap-16 mt-16 md:mt-24">
        <div class="relative w-full h-[100vh] flex flex-col items-center justify-center border border-neutral-400 rounded-lg shadow-lg">
            <p class="text-xl text-neutral-700 italic mt-1 m-0 text-center p-6">« La programmation n'est pas une question d'outils, de langages ou de frameworks. Il s'agit de résoudre des problèmes. »</p>
            <div class="absolute bottom-2 left-2 text-neutral-800 w-full">
                    <img 
                        :src="frameImage" 
                        alt="code QR" 
                        class="w-20 h-20 object-cover"
                    >
            </div>
            <p class="absolute bottom-2 right-8 text-center">Copyright © 2025 MELDEV. <br>Tous droits réservés.</p>
        </div>
        <div class="relative w-full h-[100vh] flex flex-col items-center justify-center border border-neutral-400 rounded-lg shadow-lg">
            <p class="text-4xl font-semi-bold text-neutral-800">MON PORTFOLIO</p>
            <img 
                :src="bannerImage" 
                alt="Bannière principale MELDEV 2025" 
                class="w-80 h-auto object-cover brightness-75"
                loading="lazy"
            >
            <div class="absolute bottom-2 flex justify-center w-full">
                <div class="flex flex-col items-center bg-white bg-opacity-80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-neutral-800 text-center">
                    <img 
                        :src="logoImage" 
                        alt="Logo MELDEV" 
                        class="w-20 h-20 object-cover rounded-full border-4 border-[#E9E1D1] shadow-lg"
                    >
                    <p class="font-semibold">MELDEV</p>
                    <p class="text-sm">2025</p>
                </div>
            </div>
        </div>
    </div>
    
</template>