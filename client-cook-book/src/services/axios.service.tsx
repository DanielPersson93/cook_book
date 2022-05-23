import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    responseType: 'json'
});

export default httpClient;