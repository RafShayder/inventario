<template>
    <v-main>
        <v-container v-if="!m.loading" style="height: 80vh;">
            <v-sheet  max-width="600" rounded="lg" width="100%"
            class="pa-4 text-center mx-auto">
            <v-progress-circular :size="80" :width="8" color="pink" indeterminate></v-progress-circular>
        </v-sheet>
        </v-container>
        <v-container v-else fluid>
            <v-data-table v-model:items-per-page="itemsPerPage" :headers="headers" :items="m.datos.data.data">
                <template v-slot:item.actions="{ item }">
                    <v-icon size="small" class="me-2" icon="mdi-pencil">
                    </v-icon>

                </template>
            </v-data-table>
        </v-container>

    </v-main>
</template>

<script setup>
import { getacctrans } from '../store/getters/acctransdata.js'
import { VDataTable } from 'vuetify/labs/VDataTable'
//const id=this.$route.params.id;
//console.log(id);
const m = getacctrans();
m.getdata()
const itemsPerPage = 200;
const headers = [
    {
        align: 'start',
        sortable: false,
        key: 'name',
    },
    { title: 'Cod E.', align: 'end', key: 'Cod E.' },
    { title: 'Nombre', align: 'end', key: 'Nombre' },
    { title: 'Serie', align: 'end', key: 'Serie' },
    { title: 'Color', align: 'end', key: 'Color' },
    { title: 'Estado', align: 'end', key: 'Estado' },
    { title: 'cantidad', align: 'end', key: 'cantidad' },
    { title: 'Fecha', align: 'end', key: 'Fecha' },
    { title: 'Equipamiento', align: 'end', key: 'Equipamiento' },
    { title: 'Modelo', align: 'end', key: 'Modelo' },
    { title: 'cod Sitio', align: 'end', key: 'cod Sitio' },
    { title: 'Sitio', align: 'end', key: 'Sitio' },
    { title: 'Actions', align: 'end', key: 'actions', sortable: false }

];
</script>

