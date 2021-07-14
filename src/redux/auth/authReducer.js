import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSucces]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerSuccess]: () => null,
  [authActions.loginSuccess]: () => null,
  [authActions.getCurrentUserSucces]: () => null,
  [authActions.logoutSuccess]: () => null,
  [authActions.registerError]: () => true,
  [authActions.loginError]: () => true,
  [authActions.logoutError]: () => true,
  [authActions.getCurrentUserError]: () => true,
});

const isAuth = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSucces]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
