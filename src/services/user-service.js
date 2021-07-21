import $api from '../http/api-axios';

export default class UserService {
  static async current() {
    return await $api.get('/user/current');
  }
}
