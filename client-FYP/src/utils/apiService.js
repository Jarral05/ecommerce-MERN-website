import axios from 'axios';

const apiService = axios.create({
    baseURL: "https://weak-puce-cockatoo-kilt.cyclic.app",
    withCredentials: true
})

export default apiService;
