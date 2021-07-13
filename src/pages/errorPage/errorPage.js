import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import Container from '../../components/Container';
import ModalLogout from '../../components/ModalLogout';

const ErrorPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Container>
      <div className="heroTitle">
        <h1 className="heroTitleText">Page Not Found</h1>
        <h2 className="heroTitleText">Error 404</h2>
        {isLoggedIn && <ModalLogout />}
      </div>
    </Container>
  );
};

export default ErrorPage;
