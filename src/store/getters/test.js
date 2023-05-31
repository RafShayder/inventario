import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from './api.js';
import { useAuthStore } from "../login/user.js";


export const getters = defineStore('getters', () => {
    const userStore = useAuthStore();
    const token = userStore.token;
    
     const datos = ref([]);
     const obtenerDatos = async () => {
        try {
            const response = (await api.gettest({
                headers: {
                    'Authorization': token
                }
            }));
            
             datos.value =response.data;
        } catch (error) {
            // Manejar el error al obtener la información del usuario
            console.error('Error al obtener la información de test:', error);
        }
     }
    


    return {datos,obtenerDatos}
});