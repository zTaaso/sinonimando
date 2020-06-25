import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://sinonimosapi.netlify.com/.netlify/functions/api/',
  method: 'GET',
});

export default api;
