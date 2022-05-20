import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://server-cook-book.herokuapp.com/',
    responseType: 'json'
});

export default httpClient;