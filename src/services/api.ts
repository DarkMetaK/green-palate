import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL || 'https://green-palate.vercel.app'
})
