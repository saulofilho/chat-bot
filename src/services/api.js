import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6058bdc9c3f49200173aecbc.mockapi.io/users',
});

export default api;
