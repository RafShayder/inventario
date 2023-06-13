<script setup>
import { useAuthStore } from "../store/login/user.js";
const userStore = useAuthStore().dataperfil;
</script>
<template>
    <v-main  class=" h-screen">
        <v-container fluid class="mt-10">
           
            <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <v-icon class="mb-5" color="blue" icon="mdi-check-circle" size="112"></v-icon>

                <h2 class="text-h5 mb-6"> Bienvenido {{ userStore.nombre }}</h2>
                <p class="mb-4 text-medium-emphasis text-body-2">
                    Usuario: {{ userStore.usuario}}
                    <br>
                    Rol: {{ userStore.rol}}
                </p>

                <v-divider class="mb-4"></v-divider>

                <div class="text-end">
                    <v-btn class="text-none" color="blue" rounded variant="flat" width="90">
                        °°°
                    </v-btn>
                </div>
            </v-sheet>
        </v-container>
    </v-main>
</template>

