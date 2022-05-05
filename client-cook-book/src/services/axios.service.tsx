import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:4000',
    responseType: 'json'
});

export default httpClient;