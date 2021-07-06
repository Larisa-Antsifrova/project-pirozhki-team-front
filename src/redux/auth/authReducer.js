// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import authActions from './authActions';

// const initialUserState = { name: null, email: null };
// const setError = (_, { payload }) => payload;

// const user = createReducer(initialUserState, {
//   [authActions.registerSuccess]: (_, { payload }) => payload.user,
//   [authActions.loginSuccess]: (_, { payload }) => payload.user,
//   [authActions.logoutSuccess]: () => initialUserState,
//   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
// });

// const token = createReducer(null, {
//   [authActions.registerSuccess]: (_, { payload }) => payload.token,
//   [authActions.loginSuccess]: (_, { payload }) => payload.token,
//   [authActions.logoutSuccess]: () => null,
// });

// const error = createReducer(null, {
//   [authActions.registerError]: (_, { payload }) => {
//     alert('E-MAIL already taken or your PASSWORD is too short');
//   },
//   [authActions.loginError]: (_, { payload }) => {
//     alert('E-MAIL or PASSWORD is incorrect');
//   },
//   [authActions.logoutError]: setError,
//   [authActions.getCurrentUserError]: setError,
// });

// const isAuthenticated = createReducer(false, {
//   [authActions.registerSuccess]: () => true,
//   [authActions.loginSuccess]: () => true,
//   [authActions.logoutSuccess]: () => false,
//   [authActions.getCurrentUserRequest]: () => true,
//   [authActions.getCurrentUserSuccess]: () => true,
//   [authActions.registerError]: () => false,
//   [authActions.loginError]: () => false,
//   [authActions.getCurrentUserError]: () => false,
// });

// export default combineReducers({
//   user,
//   isAuthenticated,
//   token,
//   error,
// });
