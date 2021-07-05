import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import sprite from '../../images/sprite.svg';

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/dashboard/home"
        exact
        className="navLink"
        activeClassName="navActiveLink"
      >
        <svg className="iconNavigation" width="38" height="38">
          <use href={sprite + '#main-page-mobile-icon'} />
        </svg>
        <span className="description">Главная</span>
      </NavLink>

      <NavLink
        to="/dashboard/diagram"
        exact
        className="navLink"
        activeClassName="navActiveLink"
      >
        <svg className="iconNavigation" width="38" height="38">
          <use href={sprite + '#statistics-page-mobile-icon'} />
        </svg>
        <span className="description">Статистика</span>
      </NavLink>
      <NavLink
        to="/dashboard/currency"
        exact
        className="navLink"
        activeClassName="navActiveLink"
      >
        <svg className="iconNavigation" width="38" height="38">
          <use href={sprite + '#currency-page-mobile-icon'} />
        </svg>
      </NavLink>
    </nav>
  );
}
