import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from './components/Spinner';
import WithAuthRedirect from './components/WithAuthRedirect';
import operations from './redux/auth/authOperations';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage/loginPage'));
const ErrorPage = lazy(() => import('./pages/errorPage/errorPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.getCurrentUserInfo()), [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <WithAuthRedirect path="/register" type="guest">
            <RegisterPage />
          </WithAuthRedirect>

          <WithAuthRedirect path="/login" type="guest">
            <LoginPage />
          </WithAuthRedirect>

          <WithAuthRedirect path="/dashboard" type="private">
            <DashboardPage />
          </WithAuthRedirect>

          <WithAuthRedirect path="/" type="guest">
            <ErrorPage />
          </WithAuthRedirect>
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
