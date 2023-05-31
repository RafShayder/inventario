<template>
    
    <v-main>
        <v-container fluid>
            <v-row no-gutters>
                <v-col v-for="v, k in data" :key="k" cols="12" sm="3">
                    <v-autocomplete class="ma-4" v-model="v.seleccion" :items="v.data" item-title="value" item-value="cod"
                        return-object :hint="`${v.seleccion.cod}, ${v.seleccion.value}`" variant="outlined" label="Filtrar"
                        clearable chips prepend-inner-icon="mdi-city">
                    </v-autocomplete>
                </v-col>
            </v-row>
        </v-container>
        <v-card>
            {{ test }}
        </v-card>
    </v-main>
</template>

<script>

import datos from '../assets/json/filtros.json';
import axios from 'axios';
import { getters } from '../store/getters/test.js'
const m = getters();
await m.obtenerDatos();
const data = datos;
export default {

    data() {
        return {
            test:m.datos,
            data: m.datos,
            isEditing: false,
        }
    }
}
</script>