import React from 'react';
import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Title text={<span className="titleApp">Finance App</span>} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
