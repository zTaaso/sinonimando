import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sinonimosapi.netlify.com/.netlify/functions/api/',
  method: 'GET',
});

export default api;
