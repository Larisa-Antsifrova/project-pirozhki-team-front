import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from './components/Spinner';
import WithAuthRedirect from './components/WithAuthRedirect';
import operations from './redux/auth/authOperations';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const ErrorPage = lazy(() => import('./pages/errorPage'));
const AuthPage = lazy(() => import('./pages/authPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.getCurrentUserInfo()), [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <WithAuthRedirect path="/auth" type="guest" redirectTo="/dashboard">
            <AuthPage />
          </WithAuthRedirect>

          <WithAuthRedirect
            path="/dashboard"
            type="private"
            redirectTo="/auth/login"
          >
            <DashboardPage />
          </WithAuthRedirect>

          <WithAuthRedirect exact path="/" type="guest" redirectTo="/auth">
            <AuthPage />
          </WithAuthRedirect>

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
