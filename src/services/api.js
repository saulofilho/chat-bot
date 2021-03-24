import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6058bdc9c3f49200173aecbc.mockapi.io/',
});

export default api;
