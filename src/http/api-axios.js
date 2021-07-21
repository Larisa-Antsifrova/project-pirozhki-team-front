import axios from 'axios';

export const API_URL = 'https://awesome-wallet-app.herokuapp.com';

export const apiAxios = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
