import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import Container from './components/Container';
import { authOperations } from './redux/auth';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

const DashboardPage = lazy(() => import('./pages/dashboardPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const ErrorPage = lazy(() => import('./pages/errorPage'));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);

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
