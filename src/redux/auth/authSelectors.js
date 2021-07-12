const getIsAuthenticated = state => state.auth.isAuth;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated, getUsername, getUserEmail };
