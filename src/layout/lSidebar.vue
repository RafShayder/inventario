<template>
    <v-navigation-drawer v-model="store.valor" fixed temporary width="300">
        <v-container>
            <v-icon icon="mdi-collage" class='colortexto'></v-icon>
            <span class=" mx-2 font-weight-black colortexto" > OPCIONES</span>
        </v-container>
        <v-divider class="text-blue"></v-divider>
        <v-container class="mx-auto" max-width="300">
            <v-list nav>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" :title="item.name" :to="item.path">
                </v-list-item>
            </v-list>
        </v-container>
        
        <v-container class="lgoutcontainer">
            <v-btn color="red" class="ma-4 lgout">
                <span class="px-5">Salir</span>
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>
        </v-container>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'lSidebar',
};
</script>
<script setup>
import { rutajson,estadoSidebar,sidebardata } from '../store/actions/btns.js';
const store = estadoSidebar();
const items = rutajson().data;
const items2=sidebardata().data;
</script>
<style scoped>
.lgoutcontainer {
    display: flex;
    justify-content: center;
}

.lgout {
    position: absolute;
    bottom: 0;

}
.colortexto{
    color: #6A68E5;
  }
</style>