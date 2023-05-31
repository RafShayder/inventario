import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Cambia esto por la URL de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});
export default {
    gettest(config) {
        return apiClient.get('api/test', config);
    }
};