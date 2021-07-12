import React from 'react';
import Title from '../../components/Title';
import RegistrationForm from '../../components/RegistrationForm';
import Container from '../../components/Container';
import './registerPage.scss';

const RegisterPage = () => {
  return (
    <main>
      <div className="authWrapper">
        <Container>
          <RegistrationForm />
        </Container>
      </div>
    </main>
  );
};

export default RegisterPage;
