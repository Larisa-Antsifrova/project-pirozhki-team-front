import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = user => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    dispatch(authActions.loginError(null));
    const { data } = await axios.post('/auth/registration', user);
    const accessToken = data.data.accessToken;
    token.set(accessToken);
    dispatch(authActions.registerSuccess(data.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = user => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    dispatch(authActions.loginError(null));
    const { data } = await axios.post('/auth/login', user);
    const accessToken = data.data.accessToken;
    token.set(accessToken);
    dispatch(authActions.loginSuccess(data.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest);
  try {
    await axios.post('/auth/logout');
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
    const response = await axios.get('/user/current');
    dispatch(authActions.getCurrentUserSucces(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout, getCurrentUserInfo };
