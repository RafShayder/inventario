<template>
    <v-app-bar  elevation="15" class="gradienteblue">
      <v-app-bar-nav-icon @click="store.cambiarEstado" :class="colorlineas"></v-app-bar-nav-icon>
      <v-app-bar-title :class="colorlineas">Telefonica</v-app-bar-title>
      <template v-slot:append>
        <profile :class="color"></profile>
        <optpuntos></optpuntos>
      </template>
    </v-app-bar>
  </template>
  <script>
  import optpuntos from "../assets/widget/wPuntos.vue";
  import profile from "../assets/widget/wPerfil.vue";
  export default {
    data: () => ({
      color: 'text-indigo-accent-4 font-weight-medium',
      colorlineas: 'text-white'
    }
    ),
    components: {
      optpuntos,
      profile
    }
  }
  </script>
    
  <script setup>
  import { estadoSidebar } from '../store/actions/btns.js'
  const store = estadoSidebar();
  </script>
  <style scoped>
  .gradienteblue{
    margin-bottom: 10px;
    background: #ffffff;
    background-image: linear-gradient(260deg, #c24bee 0, #a243f0 25%, #783cf2 50%, #3239f4 75%, #0038f5 100%);

  }
  </style>
    
    
    