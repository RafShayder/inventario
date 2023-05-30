
<template>
    <v-sheet class="mx-auto pa-8 pb-8 mt-10" elevation="8" max-width="448" rounded="lg">
        <v-card class="mx-auto mb-3 " elevation="0" subtitle="Telefonica del Perú">
            <template v-slot:prepend>
                <v-icon icon="mdi-chart-donut" color="blue-accent-4" size="x-large"></v-icon>
            </template>
            <template v-slot:title>
                <strong>Proyecto lambayeque</strong>
            </template>
        </v-card>
        <v-form fast-fail>
            <v-text-field class="mb-6" variant="solo" v-model="usuario" label="Usuario" clearable
                :rules="[rules.required]"></v-text-field>
            <v-text-field class="mb-6" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" label="Contraseña" prepend-inner-icon="mdi-lock-check" variant="solo"
                @click:append-inner="visible = !visible" v-model="pass" clearable :rules="[rules.required]">
            </v-text-field>
            <v-btn type="submit" color="blue" block class="mb-8" size="large" :disabled="loading" :loading="loading"
                @click="loading = !loading">Entrar</v-btn>
        </v-form>
        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Olvidaste tu contraseña?</a>
        <v-card class="mt-5">
            <v-alert type="success" :title="alert.titulo" v-model="alert.bol" border="start" variant="tonal" closable
                :color="alert.color" :text="alert.cuerpo">
            </v-alert>
        </v-card>
    </v-sheet>
</template>

<script>
import { useAuthStore } from '../store/login/user';
export default {
    data() {
        return {
            alert: {
                bol: false,
                titulo: "",
                cuerpo: "",
                color: ""
            },
            visible: false,
            loading: false,
            usuario: '',
            pass: '',
            rules: {
                required: value => !!value || 'Se requiere este campo',
            },
        }
    },
    watch: {
        loading(val) {
            if (!val) return
            {
                setTimeout(() => {
                    this.loading = false; this.login();
                }, 1200);


            }
        },
    },
    methods: {
        login() {
            this.alert.bol = true;
            const authStore = useAuthStore();
            // Llamar a la acción de inicio de sesión del store de autenticación
            authStore.login({
                usuario: this.usuario,
                pass: this.pass
            }).then(() => {
                this.alert.titulo = authStore.alert.titulo;
                this.alert.cuerpo = authStore.alert.cuerpo;
                this.alert.color = authStore.alert.color;
            });

        },
    }
}

</script>
