<script setup>
import NavBar from './layouts/NavBar.vue';
import FooterPart from './layouts/FooterPart.vue';

</script>
<template>
  <div class="bg-[#E9E1D1]">
    <div class="fixed top-0 left-0 right-0"><NavBar /></div>
    <div class="p-6"><RouterView></RouterView></div>
    <div><FooterPart /> </div>
  </div>
  
</template>
<style scoped></style>