import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'localhost:3000', // Cambia esto por la URL de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});
export default {
    login(credentials) {
        return apiClient.post('user/login', credentials);
    },
    getUserInfo(config) {
        return apiClient.get('user/profile', config);
    }
};