import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Cambia esto por la URL de tu API
    headers: {
        'Content-Type': 'application/json charset=UTF-8'
    }
});
export default {
    gettest(config) {
        return apiClient.get('api/test', config);
    },
    getdataacctrans(config) {
        return apiClient.get('api/acctrans', config);
    },
    getestados(config) {
        return apiClient.get('api/acctrans', config);
    },
};