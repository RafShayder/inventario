<script setup>
import { useAuthStore } from "../store/login/user.js";
const userStore = useAuthStore().dataperfil;
</script>
<script>
import whCards from '../assets/widget/whCards.vue';
export default {
    components: {
        whCards
    },
    data: () => ({
        cards: [
            { title: 'Primero', contenido: 'loren ipsus adasdadad', icono: 'mdi-cards', valor: '5840', color: '#009dc2' },
            { title: 'Segundo', contenido: 'loren ipsus adasdadad', icono: 'mdi-wallet-bifold', valor: '2460', color: '#e83260' },
        ],
    }),
}
</script>
<template>
    <v-main>
        <v-container fluid class="pa-0 ">
            <whCards :cards="cards"></whCards>
            <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <v-icon class="mb-5" color="blue" icon="mdi-check-circle" size="112"></v-icon>

                <h2 class="text-h5 mb-6">Texto aqui</h2>
                <p class="mb-4 text-medium-emphasis text-body-2">
                    Texto complementario
                    <br>
                    --Texto complementario 2 --
                </p>

                <v-divider class="mb-4"></v-divider>

                <div class="text-end">
                    <v-btn class="text-none" color="blue" rounded variant="flat" width="90">
                        Done
                    </v-btn>
                </div>
            </v-sheet>
        </v-container>
    </v-main>
</template>

