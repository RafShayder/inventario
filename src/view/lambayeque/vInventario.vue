<template>
    <v-main>
        <div class="rounded-xl bg-white">
            <div class="text-center">
                <h1 class="font-weight-regular text-light-blue-accent-4"> {{ titulo }}</h1>
            </div>
            <v-breadcrumbs :items="[this.$route.name, this.$route.params.id]" color="light-blue-accent-4" >
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <v-container v-if="!loading" style="height: 80vh;">
            <v-sheet max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                <v-progress-circular :size="80" :width="8" color="pink" indeterminate></v-progress-circular>
            </v-sheet>
        </v-container>
        <v-container fluid v-else>
            <modeloInventario :data="datos"></modeloInventario>
        </v-container>
    </v-main>
</template>
<script>
import modeloInventario from "../../components/modeloInventario.vue";
import { inventario } from "../../store/getters/acctransdata";
export default {
    components: {
        modeloInventario
    },
    data() {
        return {
            titulo: '',
            loading: false,
            datos: {
                data: [],
                header: [
                    {
                        align: 'start',
                        sortable: false,
                        key: 'name',
                    },
                    { title: 'CodSitio', align: 'start', key: 'codsitio' },
                    { title: 'Sitio', align: 'start', key: 'nombresitio' },
                    { title: 'Capa', align: 'start', key: 'nombrecapa' },
                    { title: 'Equipa', align: 'start', key: 'nombreequipamiento' },
                    { title: 'Equipo', align: 'start', key: 'nombreequipo' },
                    { title: 'Modelo', align: 'start', key: 'modelo' },
                    { title: 'Cant', align: 'start', key: 'cantidad' },
                    { title: 'Estado', align: 'start', key: 'estado' },
                    { title: 'Color', align: 'start', key: 'color' },
                    { title: 'Serie', align: 'start', key: 'serie' },
                    { title: 'Actions', align: 'center', key: 'actions', sortable: false }
                ],
            },
        }
    },
    watch: {
        '$route.params': {
            immediate: true,
            handler() {
                this.realizarPeticion();
            }
        }
    },
    methods: {
        async realizarPeticion() {
            this.loading = false;
            const m = inventario();
            const id = this.$route.params.id;
            await m.getdata(id)
            this.datos.data = m.datos.data.data
            this.loading = m.loading
            this.titulo = m.datos.data.titulo

        }
    },

}
</script>
