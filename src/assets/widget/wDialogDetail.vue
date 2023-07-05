<template>
            <v-card>
                <v-toolbar dark color="#0091EA">
                    <slot name="btncerrar"></slot>
                    <v-toolbar-title class="text-white">Detalles</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-container>
                    {{ data }}
                </v-container>
                <v-container>
                    <mapsPunto></mapsPunto>
                </v-container>
            </v-card>
</template>

<script setup>
defineProps({
    data: {
        required: true
    }
})
</script>
<script>
import mapsPunto from './mapsPunto.vue';
export default {
    components:{
        mapsPunto
    }
}
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .3s ease-in-out;
}
</style>

