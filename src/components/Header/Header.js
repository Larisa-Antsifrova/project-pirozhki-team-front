import React from 'react';
import './Header.scss';
import sprite from '../../images/sprite.svg';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';
import ModalLogout from '../ModalLogout/ModalLogout';

const Header = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <header className="header">
      <Link className="headerWrapper" to="/dashboard/home">
        <span className="headerLogo">
          {biggerThan767 ? (
            <svg>
              <use href={sprite + '#wallet-icon'} />
            </svg>
          ) : (
            <svg>
              <use href={sprite + '#wallet-mobile-icon'} />
            </svg>
          )}
        </span>
        <span className="headerTitle">Wallet</span>
      </Link>
      <ModalLogout />
    </header>
  );
};

export default Header;
