import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';
import { useMediaPredicate } from 'react-media-hook';

const Header = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <header className="header">
      <span className="header__logo">
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
      <span className="header__title">Wallet</span>
    </header>
  );
};

export default Header;
