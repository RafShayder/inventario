<template> 
        <v-container fluid>
            <v-row no-gutters>
                <v-col v-for="v, k in data" :key="k" cols="12" sm="3">
                    <v-autocomplete class="ma-4" v-model="v.seleccion" :items="v.data" item-title="value" item-value="cod"
                        return-object :hint="`${v.seleccion.cod}, ${v.seleccion.value}`" variant="outlined" :label="k"
                        clearable chips prepend-inner-icon="mdi-city">
                    </v-autocomplete>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import { filtros } from '../store/getters/acctransdata.js'
const m = filtros();
await m.getdata();
console.log(m.datos)
export default {
    data() {
        return {
            data: m.datos.data,
            isEditing: false,
        }
    }
}
</script>