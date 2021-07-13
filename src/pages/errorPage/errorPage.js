import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';
import Container from '../../components/Container';
import './errorPage.scss';

const ErrorPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Container>
      <div className="heroTitle">
        <h1 className="heroTitleText">Page Not Found</h1>
        <h2 className="heroTitleText">Error 404</h2>
        {isLoggedIn ? (
          <NavLink to="/dashboard/home" exact className="authBtnRedirect">
            Домой
          </NavLink>
        ) : (
          <NavLink to="/auth/login" exact className="authBtnRedirect">
            Домой
          </NavLink>
        )}
      </div>
    </Container>
  );
};

export default ErrorPage;
