import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import Container from './components/Container';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const ErrorPage = lazy(() => import('./pages/errorPage'));

const App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Suspense>
    </Container>
  );
};
export default App;
