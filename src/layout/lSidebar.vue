<template>
    <v-navigation-drawer v-model="store.valor"  width="300">
        <v-container>
            <v-icon icon="mdi-format-list-checks" class='colortexto'></v-icon>
            
            <span class=" mx-2 font-weight-black colortexto"> OPCIONES</span>
        </v-container>
        <v-divider class="text-blue"></v-divider>
        <v-container class="mx-auto" max-width="300">
            <v-list nav v-for="valor, key in items2" :key="key" color="blue">
                <v-list-group :value="key" color="blue">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="key" :prepend-icon="valor.icon" color="blue" ></v-list-item>
                    </template>
                    <v-list-item v-for="val in valor.data" :key="val.path" :title="val.titulo" :to="{name:val.name,params:{id :val.path}}"
                        :prepend-icon="val.icon"  color="blue"></v-list-item>
                </v-list-group>
            </v-list>
        </v-container>

        <v-container class="lgoutcontainer">
            <v-btn color="red" class="ma-4 lgout" @click="cerrarSesion">
                <span class="px-5">Salir</span>
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup>
import {estadoSidebar, sidebardata } from '../store/actions/btns.js';
const store = estadoSidebar();
const items2 = sidebardata().data;
</script>
<script>
export default {
    name: 'lSidebar',
    data(){
        return {
            valortemp:'temporary'
        }
    },
    methods: {
    cerrarSesion() {
      // Eliminar el token de autenticación del almacenamiento local (u otra solución de almacenamiento)
      localStorage.removeItem('token');

      // Redirigir al usuario a la página de inicio de sesión o a otra página deseada
      this.$router.push('/login');
    }
  }
};
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

.colortexto {
    color: #0091EA;
}
</style>