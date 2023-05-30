<template>
    <v-navigation-drawer v-model="store.valor" fixed temporary width="300">
        <v-container>
            <v-icon icon="mdi-lan-connect" :class='config.opciones'></v-icon>
            <span class=" mx-2" :class="config.opciones"> OPCIONES</span>
        </v-container>
        <v-divider :class="config.hr"></v-divider>
        <v-container class="mx-auto" max-width="300">
            <v-list nav>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" :title="item.name" :to="item.path">
                </v-list-item>
            </v-list>
        </v-container>
        <v-container class="lgoutcontainer">
            <v-btn color="red" class="ma-4 lgout">
                <span class="px-5">Salir</span>
                <v-icon :icon="config.louticon"></v-icon>
            </v-btn>
        </v-container>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'lSidebar',
    data: () => ({
        config: {
            opciones: 'text-button font-weight-bold text-blue my-1 py-3',
            hr: 'text-blue-accent-2',
            home: 'text-button font-weight-bold text-blue',
            louticon: 'mdi-logout'
        }
    }),
};
</script>
<script setup>
import { estadoSidebar } from '../store/actions/btns.js'
import { rutajson } from '../store/actions/btns.js';
const store = estadoSidebar();
const items = rutajson().data;
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
</style>