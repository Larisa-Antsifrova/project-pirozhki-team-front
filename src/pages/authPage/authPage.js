import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import Container from '../../components/Container';
import RegistrationForm from '../../components/RegistrationForm';
import LoginForm from '../../components/LoginForm';
import './authPage.scss';

const AuthPage = () => {
  const currentPage = useLocation();
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  const biggerThan1280 = useMediaPredicate('(min-width: 1280px)');

  return (
    <>
      <main>
        <div className="authWrapper">
          {biggerThan1280 ? <div className="authBackdrop"></div> : null}
          <Container>
            <div className="authContainer">
              {biggerThan767 ? (
                <div className="heroWrapper">
                  <div
                    className={
                      currentPage.pathname.includes('/auth/login')
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
                {currentPage.pathname.includes('/auth/register') ? (
                  <RegistrationForm />
                ) : (
                  <LoginForm />
                )}
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
