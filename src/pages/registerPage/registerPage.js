import React from 'react';
import Container from '../../components/Container';
import RegistrationForm from '../../components/RegistrationForm';
import './registerPage.scss';

const RegisterPage = () => {
  return (
    <main>
      <div className="authWrapper">
        <Container>
          <div className="heroWrapper">
            <div className="heroImageRegister"></div>
            <div className="heroTitle">
              <h1 className="heroTitleText">Finance App</h1>
            </div>
          </div>
          <div className="formWrapper">
            <RegistrationForm />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default RegisterPage;
