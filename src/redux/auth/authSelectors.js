export const getIsAuthenticated = state => state.auth.isAuth;
export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;

// export default { getIsAuthenticated, getUsername, getUserEmail };
