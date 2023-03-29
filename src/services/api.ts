import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8001',
})

console.log('API URL:', api.defaults.baseURL);