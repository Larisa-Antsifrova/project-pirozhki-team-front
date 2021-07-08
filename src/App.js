import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import operations from './redux/auth/authOperations';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const ErrorPage = lazy(() => import('./pages/errorPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.getCurrentUserInfo()), [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute path="/register" restricted redirectTo="/dashboard">
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/dashboard">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/dashboard" redirectTo="/login">
            <DashboardPage />
          </PrivateRoute>

          <PublicRoute exact path="/">
            <ErrorPage />
          </PublicRoute>

          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
