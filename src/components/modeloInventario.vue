<template>
    <div class="filtromin">
        <v-card class="pa-2 ma-2" elevation="6">
            <v-text-field hide-details="true" append-inner-icon="mdi-magnify" label="Cod Sitio" variant="plain"
                density="comfortable" color="light-blue-accent-4" bg-color="white" clearable v-model="search.codsitio"
                @click:clear="searchCodsitio" @click:append-inner="searchCodsitio"></v-text-field>
        </v-card>
        <v-card class="pa-2 ma-2" elevation="6">
            <v-text-field hide-details="true" append-inner-icon="mdi-magnify" label="Sitio" variant="plain"
                density="comfortable" color="light-blue-accent-4" bg-color="white" clearable v-model="search.nombresitio"
                @click:clear="searchNombresitio" @click:append-inner="searchNombresitio"></v-text-field>
        </v-card>
        <v-card class="pa-2 ma-2" elevation="6">
            <v-text-field hide-details="true" append-inner-icon="mdi-magnify" label="Equipo" variant="plain"
                density="comfortable" color="light-blue-accent-4" bg-color="white" clearable v-model="search.nombreequipo"
                @click:clear="searchNombreequipo" @click:append-inner="searchNombreequipo"></v-text-field>
        </v-card>
    </div>
    <v-data-table class="elevation-4" v-model:items-per-page="itemsPerPage" :headers="data.header" :items="filteredItems">
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon size="small" class="me-2" color="#2962FF" icon="mdi-clipboard-list" @click="showDetail(item.raw)"></v-icon>
            <v-icon size="small" class="me-2" color="#FFD600" icon="mdi-pencil" @click="editItem(item.raw)"></v-icon>
            <v-icon size="small" class="me-2" color="#F50057" icon="mdi-delete" @click="editItem(item.raw)"></v-icon>
        </template>
        <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
                Found no results.
            </v-alert>
        </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="1000">
        <v-card class="rounded-xl">
            <v-card-text>
                <v-container fluid>
                    <v-row no-gutters>
                        <template v-for="(v, key) in editor" v-bind:key="key">
                            <cEditing v-model="editor[key]" :label="key"></cEditing>
                        </template>
                    </v-row>
                </v-container>
                <v-btn @click="prueba" color="blue" class="ma-1">
                    Actualizar
                </v-btn>
                <v-btn @click="prueba" color="red" class="ma-1">
                    Cancelar
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="statedetail" fullscreen :scrim="false" transition="dialog-bottom-transition">
        <wDialogDetail :data="datadetail">
            <template v-slot:btncerrar>
                <v-btn icon dark @click="statedetail=!statedetail" color="white">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </wDialogDetail>
    </v-dialog>
</template>
<script setup>
defineProps({
    data: {
        required: true
    }
})
</script>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import cEditing from './cEditing.vue';
import wDialogDetail from '../assets/widget/wDialogDetail.vue';
export default {
    components: {
        cEditing,
        wDialogDetail
    },
    data() {
        return {
            dialog: false,
            statedetail:false,
            datadetail: {},
            itemsPerPage: 15,
            search: {
                codsitio: "",
                nombresitio: "",
                nombreequipo: "",
            },
            filterQry: {
                codsitio: "",
                nombresitio: "",
                nombreequipo: "",
            },
        }
    },
    computed: {
        filteredItems: function () {
            return this.filterItems(this.data.data, this.filterQry);
        }
    },
    methods: {
        showDetail: function (item) {
            this.statedetail=!this.statedetail;
            this.datadetail=item
        },
        editItem(item) {
            this.dialog = true;
            this.editor = Object.assign({}, item)
        },
        prueba: function () {
            console.log(this.editor)
        },
        searchCodsitio: function () {
            if (this.search.codsitio == null) {
                this.search.codsitio = ''
            }
            this.filterQry.codsitio = this.search.codsitio;
        },
        searchNombresitio: function () {
            if (this.search.nombresitio == null) {
                this.search.nombresitio = ''
            }
            this.filterQry.nombresitio = this.search.nombresitio;
        },
        searchNombreequipo: function () {
            if (this.search.nombreequipo == null) {
                this.search.nombreequipo = ''
            }
            this.filterQry.nombreequipo = this.search.nombreequipo;
        },
        filterItems: function (arr, query) {
            return arr.filter(function (item) {
                let codsitio = item.codsitio.toLowerCase().includes(query.codsitio.toLowerCase());
                let nombresitio = item.nombresitio.toLowerCase().includes(query.nombresitio.toLowerCase());
                let nombreequipo = item.nombreequipo.toLowerCase().includes(query.nombreequipo.toLowerCase());
                return (codsitio && nombresitio && nombreequipo);
            })
        },
    },
}
</script>

<style scoped>
.filtromin {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.filtromin>.v-card {
    width: 250px;
}

/*Una vez alcance los 1490px realizas el cambio*/
@media (max-width: 520px) {
    .filtromin {
        display: block;
    }

    .filtromin>.v-card {
        width: 98%;
    }
}
</style>