import axios from 'axios';
import authActions from './authActions';
import AuthService from '../../services/auth-service';
import UserService from '../../services/user-service';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const errorInit = () => async dispatch => {
  dispatch(authActions.logoutSuccess());
};

const register = user => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const { data } = await AuthService.register(user);
    const accessToken = data.data.accessToken;
    localStorage.setItem('token', accessToken);
    token.set(accessToken);
    dispatch(authActions.registerSuccess(data.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = user => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const { data } = await AuthService.login(user);
    const accessToken = data.data.accessToken;
    localStorage.setItem('token', accessToken);
    token.set(accessToken);
    dispatch(authActions.loginSuccess(data.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest);
  try {
    await AuthService.logout();
    localStorage.removeItem('token');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

const getCurrentUserInfo = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await UserService.current();
    dispatch(authActions.getCurrentUserSucces(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout, getCurrentUserInfo, errorInit };
