import React from 'react';
import Title from '../../components/Title';
import RegistrationForm from '../../components/RegistrationForm';

const RegisterPage = () => {
  return (
    <>
      <Title text={<span className="titleApp">Finance App</span>} />
      <RegistrationForm />
    </>
  );
};

export default RegisterPage;
