<template>
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account-badge" v-bind="props">
                <v-avatar>
                    <v-img src="https://octavia-vuetify3.vercel.app/assets/avatar.297c2149.png" alt="User"></v-img>
                </v-avatar>
            </v-btn>
        </template>

        <v-card min-width="300">
            <v-list>
                <v-list-item prepend-avatar="https://octavia-vuetify3.vercel.app/assets/avatar.297c2149.png" :title=data.info.nombre
                    :subtitle=data.info.usuario>
                    <template v-slot:append>
                        <v-btn variant="text" :class="fav ? 'text-red' : ''" icon="mdi-heart" @click="fav = !fav"></v-btn>
                    </template>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item :title=data.info.apellido>

                </v-list-item>
                <v-list-item :title=data.info.correo>
                </v-list-item>
            </v-list>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" variant="text" @click="menu = false">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>
<script>
export default {
    data: () => ({
        fav: true,
        menu: false,
    }),
}
</script>

<script setup>
import { reactive } from 'vue';
import { useAuthStore } from "../../store/login/user.js";
const data = reactive(
    {
        info: {}
    }
)
data.info = useAuthStore().dataperfil;

</script>