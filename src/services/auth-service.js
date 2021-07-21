import { apiAxios } from '../http/api-axios';

class AuthService {
  async register(user) {
    return await apiAxios.post('/auth/registration', user);
  }

  async login(user) {
    return await apiAxios.post('/auth/login', user);
  }

  async logout() {
    return await apiAxios.post('/auth/logout');
  }
}

export default new AuthService();
