export const getIsAuthenticated = state => state.auth.isAuth;
export const getUserName = state =>
  state.auth.user.name === undefined
    ? state.auth.user.data.name
    : state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getUserNameRefresh = state => state.auth.user.data.name;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserName,
  getUserEmail,
};
