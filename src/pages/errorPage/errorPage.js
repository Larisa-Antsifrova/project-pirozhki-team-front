import React from 'react';
import Container from '../../components/Container';
import ModalLogout from '../../components/ModalLogout';

const ErrorPage = () => {
  return (
    <Container>
      <h2>Not Found</h2>
      <ModalLogout />
    </Container>
  );
};

export default ErrorPage;
