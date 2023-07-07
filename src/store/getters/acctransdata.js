import { defineStore } from 'pinia';
import api from './api.js';
import { useAuthStore } from "../login/user.js";
export const getacctrans = defineStore('getacctrans', {
    state: () => ({
        token: null,
        loading: false,
        datos: null,
    }),
    actions: {
        async getdata() {
            try {
                const userStore = useAuthStore();
                const token = userStore.token;
                this.datos = await api.getdataacctrans({
                    headers: {
                        'Authorization': token
                    }
                });
            } catch (error) {
                return error
            }
            this.loading = true;
        },
    },
});

export const inventario = defineStore('inventario', {
    state: () => ({
        token: null,
        loading: false,
        datos: null
    }),
    actions: {
         async getdata(id) {
            try {
                const userStore = useAuthStore();
                const token = userStore.token;
                this.datos = await api.getdataacctrans({
                    headers: {
                        'Authorization':userStore.token,
                        
                    },
                    params: {
                        id: id
                    }
                });
            } catch (error) {
                return error
            }
            this.loading = true;
        },
    },
});

export const getestados = defineStore('getestados', {
    state: () => ({
        token: null,
        datos: null
    }),
    actions: {
         async getdata(id) {
            try {
                const userStore = useAuthStore();
                const token = userStore.token;
                console.log(token)
                this.datos = await api.getestados({
                    headers: {
                        'Authorization': token,
                    },
                    params: {
                        id: id
                    }
                });
            } catch (error) {
                return error
            }
            this.loading = true;
        },
    },
});