import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/home" component={DashboardPage} />
      </Switch>
    </>
  );
};
export default App;
