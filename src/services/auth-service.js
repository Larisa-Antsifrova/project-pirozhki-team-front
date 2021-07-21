import $api from '../http/api-axios';

export default class AuthService {
  static async login(user) {
    return await $api.post('/auth/login', user);
  }

  static async register(user) {
    return await $api.post('/auth/registration', user);
  }

  static async logout() {
    return await $api.post('/auth/logout');
  }
}
