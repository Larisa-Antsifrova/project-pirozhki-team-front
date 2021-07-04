import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const ErrorPage = lazy(() => import('./pages/errorPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Load...</p>}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
