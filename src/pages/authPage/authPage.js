import React from 'react';
// import React, { lazy } from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import WithAuthRedirect from '../../components/WithAuthRedirect';

import { useMediaPredicate } from 'react-media-hook';
import Container from '../../components/Container';
import RegistrationForm from '../../components/RegistrationForm';
import LoginForm from '../../components/LoginForm';
import '../registerPage/registerPage.scss';

// const RegisterPage = lazy(() => import('../registerPage'));
// const LoginPage = lazy(() => import('../loginPage'));

const AuthPage = () => {
  const location = useLocation();
  console.log(location.pathname);

  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  const biggerThan1280 = useMediaPredicate('(min-width: 1280px)');

  return (
    <main>
      <Redirect to="/auth/login" />
      <div className="authWrapper">
        {biggerThan1280 ? <div className="authBackdrop"></div> : null}
        <Container>
          <div className="authContainer">
            {biggerThan767 ? (
              <div className="heroWrapper">
                <div
                  className={
                    location.pathname === '/auth/login'
                      ? 'heroImageLogin'
                      : 'heroImageRegister'
                  }
                ></div>
                <div className="heroTitle">
                  <h1 className="heroTitleText">Finance App</h1>
                </div>
              </div>
            ) : null}
            <div className="formWrapper">
              {location.pathname === '/auth/login' ? (
                <LoginForm />
              ) : (
                <RegistrationForm />
              )}
            </div>
          </div>
        </Container>
      </div>
    </main>
  );

  // return (
  //   <>
  //     <Switch>
  //       <WithAuthRedirect
  //         path="/auth/login"
  //         type="guest"
  //         redirectTo="/dashboard/home"
  //       >
  //         <LoginPage />
  //       </WithAuthRedirect>

  //       <WithAuthRedirect
  //         path="/auth/register"
  //         type="guest"
  //         redirectTo="/dashboard/home"
  //       >
  //         <RegisterPage />
  //       </WithAuthRedirect>

  //       <Redirect to="/auth/login" />
  //     </Switch>
  //   </>
  // );
};

export default AuthPage;
