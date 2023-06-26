<template>
    <v-main>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="3" class="ma-2">
                    <v-text-field append-inner-icon="mdi-magnify" label="Equipo" variant="outlined" color="primary"
                        clearable v-model="search.qryEquipo" @click:clear="searchEquipo"
                        @click:append-inner="searchEquipo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="ma-2">
                    <v-text-field append-inner-icon="mdi-magnify" label="Nombre" variant="outlined" color="primary"
                        clearable v-model="search.qryNombre" @click:append-inner="searchNombre"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="ma-2">
                    <v-text-field append-inner-icon="mdi-magnify" label="Sitio" variant="outlined" color="primary" clearable
                        v-model="search.qrySitio" @click:append-inner="searchSitio"></v-text-field>
                </v-col>
            </v-row>

        </v-container>
        <v-container v-if="!loading" style="height: 80vh;">
            <v-sheet max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <v-progress-circular :size="80" :width="8" color="pink" indeterminate></v-progress-circular>
            </v-sheet>
        </v-container>
        <v-container v-else fluid>
            <v-data-table class="elevation-4" v-model:items-per-page="itemsPerPage" :headers="headers"
                :items="filteredItems">
                <template v-slot:items="props">
                    <td>{{ props.item.equipo }}</td>
                    <td>{{ props.item.nombre }}</td>
                    <td>{{ props.item.serie }}</td>
                    <td>{{ props.item.color }}</td>
                    <td>{{ props.item.estado }}</td>
                    <td>{{ props.item.cantidad }}</td>
                    <td>{{ props.item.fecha }}</td>
                    <td>{{ props.item.equipamiento }}</td>
                    <td>{{ props.item.modelo }}</td>
                    <td>{{ props.item.codsitio }}</td>
                    <td>{{ props.item.sitio }}</td>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon size="small" class="me-2" color="#00C853" icon="mdi-pencil" @click="editItem(item.raw)">
                    </v-icon>
                </template>
                <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                        Found no results.
                    </v-alert>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="1000">
                <v-card>
                    <v-card-text>
                        <v-container fluid>
                            <v-row  no-gutters>
                                <template v-for="(v, key) in editor" v-bind:key="key">
                                    <cEditing   v-model="editor[key]" :label="key" ></cEditing>
                                </template>
                            </v-row>
                        </v-container>
                        <v-btn @click="prueba" color="green">
                            clcik me 
                        </v-btn>
                    </v-card-text>
                </v-card>

            </v-dialog>
        </v-container>
    </v-main>
</template>
<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { inventario } from '../../store/getters/acctransdata';
const m2 = inventario();
</script>

<script>
import { inventario } from '../../store/getters/acctransdata';
import cEditing from '../../components/cEditing.vue'
const m = inventario();
export default {
    components: {
        cEditing
    },
    data: () => ({
        dialog: false,
        loading: false,
        editor: {
            equipo:'',
            nombre:'',
            serie:'',
            color:'',
            estado:'',
            cantidad:null,
            fecha:'',
            equipamiento:'',
            modelo:'',
            codsitio:'',
        },
        data: [],
        itemsPerPage: 15,
        headers: [
            {
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'equipo', align: 'end', key: 'equipo' },
            { title: 'nombre', align: 'end', key: 'nombre' },
            { title: 'Serie', align: 'end', key: 'serie' },
            { title: 'Color', align: 'end', key: 'color' },
            { title: 'Estado', align: 'end', key: 'estado' },
            { title: 'cantidad', align: 'end', key: 'cantidad' },
            { title: 'Fecha', align: 'end', key: 'fecha' },
            { title: 'Equipamiento', align: 'end', key: 'equipamiento' },
            { title: 'Modelo', align: 'end', key: 'modelo' },
            { title: 'cod Sitio', align: 'end', key: 'codsitio' },
            { title: 'sitio', align: 'end', key: 'sitio' },
            { title: 'Actions', align: 'end', key: 'actions', sortable: false }
        ],
        search: {
            qryEquipo: "",
            qryNombre: "",
            qrySitio: "",
        },
        filterQry: {
            qryEquipo: "",
            qryNombre: "",
            qrySitio: "",
        },
    }),
    async created() {
        await m.getdata()
        this.data = m.datos.data.data
        this.loading = m.loading
    },

    methods: {
        editItem(item) {
            this.dialog = true;
            this.editor = Object.assign({}, item)
        },
        prueba: function (){
            console.log(this.editor)
        },
        searchEquipo: function () {
            if (this.search.qryEquipo == null) {
                this.search.qryEquipo = ''
            }
            this.filterQry.qryEquipo = this.search.qryEquipo;
        },
        searchNombre: function () {
            if (this.search.qryEquipo == null) {
                this.search.qryNombre = ''
            }
            this.filterQry.qryNombre = this.search.qryNombre;
        },
        searchSitio: function () {
            if (this.search.qryEquipo == null) {
                this.search.qrySitio = ''
            }
            this.filterQry.qrySitio = this.search.qrySitio;
        },
        filterItems: function (arr, query) {
            return arr.filter(function (item) {
                let equipo = item.equipo.toLowerCase().includes(query.qryEquipo.toLowerCase());
                let nombre = item.nombre.toLowerCase().includes(query.qryNombre.toLowerCase());
                let sitio = item.sitio.toLowerCase().includes(query.qrySitio.toLowerCase());
                return (equipo && nombre && sitio);
            })
        },

    },
    computed: {
        filteredItems: function () {
            console.log(this.filterQry)
            return this.filterItems(this.data, this.filterQry);
        }
    },
};
</script>
