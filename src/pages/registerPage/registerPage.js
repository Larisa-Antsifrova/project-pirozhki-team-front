import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import Container from '../../components/Container';
import RegistrationForm from '../../components/RegistrationForm';
import './registerPage.scss';

const RegisterPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');

  return (
    <main>
      <div className="authWrapper">
        <Container>
          <div className="authContainer">
            {biggerThan767 ? (
              <div className="heroWrapper">
                <div className="heroImageRegister"></div>
                <div className="heroTitle">
                  <h1 className="heroTitleText">Finance App</h1>
                </div>
              </div>
            ) : null}
            <div className="formWrapper">
              <RegistrationForm />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default RegisterPage;
