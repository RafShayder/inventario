<template>
    <v-main>
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
            loading: false,
            datos: {
                data: [],
                header: [
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
            this.loading=false;
            const m = inventario();
            const id = this.$route.params.id;
            await m.getdata(id)
            this.datos.data = m.datos.data.data
            this.loading = m.loading
        }
    }
}
</script>
