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
  background: linear-gradient(90deg, #87c1f9 30%, #458cf6 70%);
  }
  </style>
    
    
    