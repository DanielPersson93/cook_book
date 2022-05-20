import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || '//localhost:4000',
    responseType: 'json'
});

export default httpClient;