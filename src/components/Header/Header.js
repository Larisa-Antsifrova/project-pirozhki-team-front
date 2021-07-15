import React from 'react';

import { Link } from 'react-router-dom';

import ModalLogout from '../ModalLogout/ModalLogout';
import Container from '../Container';

import sprite from '../../images/sprite.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="headerWrapper">
          <Link className="headerLink" to="/dashboard/home">
            <span className="headerLogo">
              <svg className="formHeaderIcon">
                <use href={sprite + '#wallet-mobile-icon'} />
              </svg>
            </span>
            <span className="headerTitle">Wallet</span>
          </Link>
          <ModalLogout />
        </div>
      </Container>
    </header>
  );
};

export default Header;
