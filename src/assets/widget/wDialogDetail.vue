<template>
    <v-card>
        <v-toolbar dark color="amber-accent-4">
            <slot name="btncerrar"></slot>
            <v-toolbar-title class="text-white text-h4">{{ data.nombreequipo }}</v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
            <div class="text-h4">
                <span class="text-blue-darken-4">Modelo : </span> <span class="text-light-blue-accent-4">
                    {{ data.modelo }}</span>
            </div>
        </v-container>
        <div>
            <div class="py-10 flexd">
                <!--Sitio-->
                <v-card height="auto" max-height="500px" width="180px" max-width="220px" class="rounded-xl mx-auto "
                    :class="color.sitio.bg" elevation="14">
                    <v-row class="bg-white">
                        <div class="mx-auto mt-5">
                            <v-icon :color="color.sitio.text" class="text-h1" :icon="color.sitio.icono"></v-icon>
                        </div>
                    </v-row>
                    <v-row class="px-6 pb-4">
                        <div class="mx-auto mt-5">
                            <div>
                                Cod: {{ data.codsitio }}
                            </div>
                            <v-divider :color="divcolor"></v-divider>
                            <div>
                                Nombre: {{ data.nombresitio }}
                            </div>
                        </div>
                    </v-row>
                </v-card>
                <!--capa-->
                <v-card height="auto" max-height="500px" width="180px" max-width="220px" class="rounded-xl mx-auto "
                    :class="color.capa.bg" elevation="14">
                    <v-row class="bg-white">
                        <div class="mx-auto mt-5">
                            <v-icon :color="color.capa.text" class="text-h1" :icon="color.capa.icono"></v-icon>
                        </div>
                    </v-row>
                    <v-row class="px-6 pb-4">
                        <div class="mx-auto mt-5">
                            <div>
                                Capa: {{ data.nombrecapa }}
                            </div>
                            <v-divider :color="divcolor"></v-divider>
                            <div>
                                Eq: {{ data.nombreequipamiento }}
                            </div>
                        </div>
                    </v-row>
                </v-card>

                <!--Estado-->
                <v-card height="auto" max-height="500px" width="180px" max-width="220px" class="rounded-xl mx-auto "
                    :class="color.estado.bg" elevation="14">
                    <v-row class="bg-white">
                        <div class="mx-auto mt-5">
                            <v-icon :color="color.estado.text" class="text-h1" :icon="color.estado.icono"></v-icon>
                        </div>
                    </v-row>
                    <v-row class="px-6 pb-4">
                        <div class="mx-auto mt-5">
                            <div>
                                Estado: {{ data.estado }}
                            </div>
                            <v-divider :color="divcolor"></v-divider>
                            <div>
                                Serie: {{ data.serie }}
                            </div>
                        </div>
                    </v-row>
                </v-card>

                <!--Cantidad-->
                <v-card height="auto" max-height="500px" width="180px" max-width="220px" class="rounded-xl mx-auto "
                    :class="color.cantidad.bg" elevation="14">
                    <v-row class="bg-white">
                        <div class="mx-auto mt-5">
                            <v-icon :color="color.cantidad.text" class="text-h1" :icon="color.cantidad.icono"></v-icon>
                        </div>
                    </v-row>
                    <v-row class="px-6 pb-4">
                        <div class="mx-auto mt-5">
                            <div>
                                Cantidad: {{ data.cantidad }}
                            </div>
                            <v-divider :color="divcolor"></v-divider>
                            <div>
                                Color: {{ data.color }}
                            </div>
                        </div>
                    </v-row>
                </v-card>
            </div>

            <v-container fluid>
                <v-row>
                    <v-col class="flexdouble" :cols="getSecondColSize()" :md="4" :lg="4">
                        <v-card width="600" class="elevation-20 rounded-xl">
                            <v-img height="300"
                                src="https://1.bp.blogspot.com/-ogB81Ndb_8k/XIu-IBlSoZI/AAAAAAAA2j8/VsrCOoZ4bMIDnZEAZm9aDsP2zbV0E2ZRACLcBGAs/s1600/Tipos%2Bde%2Bantenas%2Bsat%25C3%25A9lite%2B%2BFoco%2Bcentrado%2B%252B%2BOffset%2B%252B%2BCassegrain%2B%252B%2BGregorian%2B%252B%2BMultisat%25C3%25A9lite%2B%252B%2BPlana%2B%2BCaracter%25C3%25ADsticas%2B.jpg"
                                cover class="text-white">
                                <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                                    <template v-slot:prepend>
                                        <v-btn icon="mdi-office-building-marker-outline"></v-btn>
                                    </template>

                                    <v-toolbar-title class="text-h6">
                                        {{ data.nombresitio }}
                                    </v-toolbar-title>

                                    <template v-slot:append>
                                        <v-btn icon="mdi-map-marker-check"></v-btn>
                                    </template>
                                </v-toolbar>
                            </v-img>

                            <v-card-text>
                                <div class="font-weight-bold ms-1 mb-2">
                                    Información
                                </div>

                                <v-timeline density="compact" align="start">
                                    <v-timeline-item dot-color="deep-purple-lighten-1" size="x-small">
                                        <div class="font-weight-normal">
                                            DEPARTAMENTO: <strong>{{ data.departamento }}</strong>
                                        </div>
                                    </v-timeline-item>
                                    <v-timeline-item dot-color="green" size="x-small">
                                        <div class="font-weight-normal">
                                            PROVINCIA: <strong>{{ data.provincia }}</strong>
                                        </div>
                                    </v-timeline-item>
                                    <v-timeline-item dot-color="yellow-darken-4" size="x-small">
                                        <div class="font-weight-normal">
                                            DISTRITO: <strong>{{ data.distrito }}</strong>
                                        </div>
                                    </v-timeline-item>
                                    <v-timeline-item dot-color="yellow-accent-4" size="x-small">
                                        <div class="font-weight-normal">
                                            DIRECCIÓN: <strong>{{ data.direccion }}</strong>
                                        </div>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="flexdouble" :cols="getFirstColSize()" :md="8" :lg="8">
                        <div style="min-width: 100%; min-height:400px">
                            <mapsPunto :latitud="data.latitud" :longitud="data.longitud"> </mapsPunto>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const a = defineProps({
    data: {
        required: true
    }
});
const color = {
    sitio: {
        icono: 'mdi-domain',
        bg: 'bg-light-blue-accent-4',
        text: 'light-blue-accent-4'
    },
    capa: {
        icono: 'mdi-washing-machine',
        bg: 'bg-pink-accent-4',
        text: 'pink-accent-4'
    },
    estado: {
        icono: 'mdi-check-underline-circle',
        bg: 'bg-green-darken-2',
        text: 'green-darken-2'
    },
    cantidad: {
        icono: 'mdi-numeric-',
        bg: 'bg-amber-darken-4',
        text: 'amber-darken-4'
    },

};
color.cantidad.icono = color.cantidad.icono + `${a.data.cantidad}`;
if (a.data.estado.search('B') >= 0) {
    color.estado = {
        icono: 'mdi-check-underline-circle',
        bg: 'bg-green-darken-2',
        text: 'green-darken-2'
    };
}
if (a.data.estado.search('R') >= 0) {
    color.estado = {
        icono: 'mdi-alert-circle-outline',
        bg: 'bg-yellow-accent-4 text-white',
        text: 'yellow-accent-4'
    };
}
if (a.data.estado.search('NO ') >= 0) {
    color.estado = {
        icono: 'mdi-alert-remove',
        bg: 'bg-red-accent-4',
        text: 'red-accent-4'
    };
}
const { smAndDown } = useDisplay()

const getFirstColSize = () => {
    return smAndDown ? "12" : "8";
};
const getSecondColSize = () => {
    return smAndDown ? "12" : "4";
};

</script>
<script>
import mapsPunto from './mapsPunto.vue';
export default {
    components: {
        mapsPunto
    },
    data() {
        return {
            divcolor: 'grey-lighten-5',
            messages: [
                {
                    from: 'You',
                    message: `Sure, I'll see you later.`,
                    time: '10:42am',
                    color: 'deep-purple-lighten-1',
                },
                {
                    from: 'John Doe',
                    message: 'Yeah, sure. Does 1:00pm work?',
                    time: '10:37am',
                    color: 'green',
                },
                {
                    from: 'You',
                    message: 'Did you still want to grab lunch today?',
                    time: '9:47am',
                    color: 'deep-purple-lighten-1',
                },
            ],
        }
    },
}
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .3s ease-in-out;
}

.flexd {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.flexdouble {
    display: flex;
}

/*Una vez alcance los 1490px realizas el cambio*/
@media (max-width: 790px) {
    .flexd {
        display: block;
    }

    .flexd>.v-card {
        width: 400px !important;
        max-width: 90% !important;
        margin: 20px;
    }

}
</style>

