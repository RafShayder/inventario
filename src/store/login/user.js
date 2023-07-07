import { defineStore } from 'pinia';
import api from './api.js';
import { router } from '../../router.js'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        isAuthenticated: false,
        dataperfil: {},
        alert: {
            cuerpo: "",
            titulo: "",
            color: ""
        }
    }),

    actions: {
        async login(credentials) {
            try {
                const response = await api.login(credentials);
                const token = response.data.jwt;
                // Almacenar el token en el estado
                this.token = token;

                // Guardar el token en el almacenamiento local
                localStorage.setItem('token', token);

                // Establecer el estado de autenticación como verdadero
                this.isAuthenticated = true;
                this.alert.color = "green";
                this.alert.titulo = "Autenticado";
                this.alert.cuerpo = "Bienvenido";
                // Obtener la información del usuario
                router.push('/');
                await this.getUserInfo();
            } catch (error) {
                // Manejar el error de autenticación
                console.error('Error de inicio de sesión:', error);
                this.alert.color = "red";
                this.alert.titulo = "Credenciales";
                this.alert.cuerpo = "Verifica tu usuario|contraseña";

            }
        },

        async getUserInfo() {
            try {
                // Agregar el token a los encabezados de autorización
                //api.defaults.headers.common['Authorization'] = `${this.token}`;
                const response = (await api.getUserInfo({
                    headers: {
                        'Authorization': this.token
                    }
                }));

                // Realizar acciones necesarias con la información del usuario
                this.dataperfil = response.data;
            } catch (error) {
                router.push('/login');
                localStorage.removeItem('token');
                // Manejar el error al obtener la información del usuario
                console.error('Error al obtener la información del usuario:', error);
            }
        },

        logout() {
            // Eliminar el token del estado y del almacenamiento local
            this.token = null;
            localStorage.removeItem('token');
            // Establecer el estado de autenticación como falso
            this.isAuthenticated = false;
        },
    }
});
