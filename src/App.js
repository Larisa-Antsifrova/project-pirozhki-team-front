import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Load...</p>}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/home" component={DashboardPage} />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
