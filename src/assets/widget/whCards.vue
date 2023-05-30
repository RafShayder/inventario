<template>
    <v-container fluid class="pa-0 ma-0">
        <v-row class="justify-content-center">
            <v-col v-for="card in cards" :key="card.title" cols="auto" md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card class="ma-2 pa-4 text-white" max-width="480" v-bind="props" :elevation="isHovering ? 16 : 10"
                        :color="card.color">
                        <v-card-item :title="card.title">
                        </v-card-item>
                        <v-card-text class="pa-0">
                            <v-row align="center" no-gutters>
                                <v-col class="text-h3" cols="8">
                                    <div class="d-flex justify-center">Cant: {{ card.valor }}</div>
                                    <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                                        <v-list-item-subtitle>{{ card.contenido }}</v-list-item-subtitle>
                                    </v-list-item>
                                </v-col>
                                <v-col class="text-right" cols="4">
                                    <v-icon color="white" :icon="card.icono" size="88"></v-icon>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
defineProps(
    {
        cards: {
            default: []

        }
    }
);
</script>
