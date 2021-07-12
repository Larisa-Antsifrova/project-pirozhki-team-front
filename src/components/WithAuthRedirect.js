import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../redux/auth/authSelectors';

export default function WithAuthRedirect({ type, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  if (type === 'guest' && isLoggedIn) return <Redirect to="/dashboard" />;
  else if (type === 'private' && !isLoggedIn) return <Redirect to="/login" />;
  return <Route {...routeProps}>{children}</Route>;
}
