import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import WithAuthRedirect from '../../components/WithAuthRedirect';
import Title from '../../components/Title';
const RegisterForm = lazy(() => import('../../components/RegistrationForm'));
const LoginForm = lazy(() => import('../../components/LoginForm'));
const ErrorPage = lazy(() => import('../errorPage'));

const AuthPage = () => {
  return (
    <>
      <Title text={<span className="titleApp">Finance App</span>} />
      <Switch>
        <WithAuthRedirect
          path="/auth/login"
          type="guest"
          redirectTo="/dashboard"
        >
          <LoginForm />
        </WithAuthRedirect>

        <WithAuthRedirect
          path="/auth/register"
          type="guest"
          redirectTo="/dashboard"
        >
          <RegisterForm />
        </WithAuthRedirect>

        <WithAuthRedirect exact path="/" type="guest" redirectTo="/auth/login">
          <AuthPage />
        </WithAuthRedirect>

        {/* <WithAuthRedirect path="*" type="guest" redirectTo="/notFound">
        <ErrorPage />
      </WithAuthRedirect> */}

        {/* <WithAuthRedirect path="" type="guest" redirectTo="/notFound">
        <ErrorPage />
      </WithAuthRedirect> */}

        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};

export default AuthPage;
