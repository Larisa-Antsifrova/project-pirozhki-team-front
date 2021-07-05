import React from 'react';
import './Header.scss';
import sprite from '../../images/sprite.svg';
import { useMediaPredicate } from 'react-media-hook';
import ModalLogout from '../ModalLogout/ModalLogout';

const Header = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <header className="header">
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
      <ModalLogout />
    </header>
  );
};

export default Header;
