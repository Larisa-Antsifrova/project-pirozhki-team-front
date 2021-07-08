const getIsAuthenticated = state => state.auth.isAuth;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

export default { getIsAuthenticated, getUsername, getUserEmail };
