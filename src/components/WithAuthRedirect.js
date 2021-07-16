import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsAuthenticated, getPersist } from '../redux/auth/authSelectors';

export default function WithAuthRedirect({
  type,
  children,
  redirectTo,
  ...routeProps
}) {
  const isRehydrated = useSelector(getPersist);
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {(type === 'guest' && isLoggedIn) ||
      (type === 'private' && !isLoggedIn) ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
