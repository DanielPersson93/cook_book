import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:4000' || 'https://server-cook-book.herokuapp.com/',
    responseType: 'json'
});

export default httpClient;