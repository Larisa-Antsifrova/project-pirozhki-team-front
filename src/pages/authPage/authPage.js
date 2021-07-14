import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import WithAuthRedirect from '../../components/WithAuthRedirect';
const RegisterPage = lazy(() => import('../registerPage'));
const LoginPage = lazy(() => import('../loginPage'));

const AuthPage = () => {
  return (
    <>
      <Switch>
        <WithAuthRedirect
          path="/auth/login"
          type="guest"
          redirectTo="/dashboard/home"
        >
          <LoginPage />
        </WithAuthRedirect>

        <WithAuthRedirect
          path="/auth/register"
          type="guest"
          redirectTo="/dashboard/home"
        >
          <RegisterPage />
        </WithAuthRedirect>

        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};

export default AuthPage;
