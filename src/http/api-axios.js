import axios from 'axios';

const API_URL = 'https://awesome-wallet-app.herokuapp.com';

const $api = axios.create({ withCredentials: true, baseURL: API_URL });

$api.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('persist:auth')).token;
  console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default $api;
