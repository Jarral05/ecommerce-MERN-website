import axios from 'axios';

const apiService = axios.create({
    baseURL: "https://curious-bass-necklace.cyclic.app",
    withCredentials: true
})

export default apiService;
