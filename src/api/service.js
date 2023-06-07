import axios from 'axios';

const api = axios.create({
  baseURL: 'https://employers-emloyees.herokuapp.com/',
});

export default api;
