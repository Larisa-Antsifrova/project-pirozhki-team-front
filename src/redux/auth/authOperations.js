import axios from 'axios';
import authActions from './authActions';

// awesome-wallet-app.herokuapp.com/

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const login = user => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest);
  try {
    await axios.post('/users/logout');
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
    const response = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSucces(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout, getCurrentUserInfo };
