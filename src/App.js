import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    <div className="appBackdrop">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <WithAuthRedirect
            exact
            path="/"
            type="guest"
            redirectTo="/auth/login"
          />

          <WithAuthRedirect
            path="/auth/login"
            type="guest"
            redirectTo="/dashboard/home"
          >
            <AuthPage />
          </WithAuthRedirect>

          <WithAuthRedirect
            path="/auth/register"
            type="guest"
            redirectTo="/dashboard/home"
          >
            <AuthPage />
          </WithAuthRedirect>

          <WithAuthRedirect
            path="/dashboard"
            type="private"
            redirectTo="/auth/login"
          >
            <DashboardPage />
          </WithAuthRedirect>

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
