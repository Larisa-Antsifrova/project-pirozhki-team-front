import axios from 'axios';

export const API_URL = 'http://localhost:8888';
// export const API_URL = 'https://awesome-wallet-app.herokuapp.com';

const $api = axios.create({ withCredentials: true, baseURL: API_URL });

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    console.log('Intercepter for Response is triggered');
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        console.log('Inside TRY');
        const { data } = await axios.get(`${API_URL}/auth/refresh`, {
          withCredentials: true,
        });

        console.log('data in interceptor', data);

        const accessToken = data.data.accessToken;
        localStorage.setItem('token', accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('error in Interceptor response', error);
      }
    }

    console.log('Interceptor: another error', error);
  },
);

export default $api;
