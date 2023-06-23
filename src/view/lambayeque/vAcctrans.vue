<template>
    <v-main>
        <v-container v-if="!m.loading" style="height: 80vh;">
            <v-sheet max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <v-progress-circular :size="80" :width="8" color="pink" indeterminate></v-progress-circular>
            </v-sheet>
        </v-container>
        <v-container v-else fluid>
            <v-container>
                <v-text-field v-model="search" prepend-icon="mdi-magnify" label="Search" single-line
                    hide-details></v-text-field>
            </v-container>
            <v-data-table v-model:items-per-page="itemsPerPage" :headers="headers" :items="m.datos.data.data"
                :custom-filter="filterOnlyCapsText" :search="search">
                <template v-slot:item.actions="{ item }">
                    <v-icon size="small" class="me-2" icon="mdi-pencil" @click="editItem(item.raw)">
                    </v-icon>
                </template>
            </v-data-table>
        </v-container>

    </v-main>
</template>

<script setup>
import { getacctrans } from '../../store/getters/acctransdata.js'
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
    { title: 'equipo', align: 'end', key: 'equipo' },
    { title: 'nombre', align: 'end', key: 'nombre' },
    { title: 'Serie', align: 'end', key: 'Serie' },
    { title: 'Color', align: 'end', key: 'Color' },
    { title: 'Estado', align: 'end', key: 'Estado' },
    { title: 'cantidad', align: 'end', key: 'cantidad' },
    { title: 'Fecha', align: 'end', key: 'Fecha' },
    { title: 'Equipamiento', align: 'end', key: 'Equipamiento' },
    { title: 'Modelo', align: 'end', key: 'Modelo' },
    { title: 'cod Sitio', align: 'end', key: 'cod Sitio' },
    { title: 'sitio', align: 'end', key: 'sitio' },
    { title: 'Actions', align: 'end', key: 'actions', sortable: false }

];
</script>
<script>
export default {
    data() {
        return {
            filterQry: {
                qryequipo: "",
                qrynombre: "",
                qrsitio: "",
            },
            search: '',

        }
    },
    methods: {
        editItem(item) {
            console.log(item)
        },

        filterOnlyCapsText(value, query, item) {
            console.log(value)
            return value != null &&
                query != null &&
                typeof value === 'string' &&
                value.toString().toLocaleUpperCase().indexOf(query) !== -1
        },
        searchEquipo: function (val) {
            this.filterQry.qryequipo = val;
        },

        searchNombre: function (val) {
            this.filterQry.qrynombre = val;
        },
        searchsitio: function (val) {
            this.filterQry.qrsitio = val;
        },
        filterItems: function (arr, query) {
            console.log("--filter item--")
            return arr.filter(function (item) {
                let equipo = item.equipo.toLowerCase().includes(query.qryName.toLowerCase());
                let nombre = item.nombre.toLowerCase().includes(query.qryDept.toLowerCase());
                let sitio = item.sitio.toLowerCase().includes(query.qryCity.toLowerCase());
                return (equipo && nombre && sitio);
            })
        }

    },

}
</script>