import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // we’ll define this in .env
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
