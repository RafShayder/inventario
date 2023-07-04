<template>
            <v-card>
                <v-toolbar dark color="#0091EA">
                    <slot name="btncerrar"></slot>
                    <v-toolbar-title class="text-white">Detalles</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card>
                    Buenas tardes
                </v-card>
            </v-card>
</template>

<script setup>
defineProps({
    data: {

    }
})
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}
</style>

