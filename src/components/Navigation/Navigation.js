import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import sprite from '../../images/sprite.svg';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/dashboard/home"
        exact
        className="link"
        activeClassName="activeLink"
      >
        <svg class="icon-navifation" width="38" height="38">
          <use href={sprite + '#main-page-mobile-icon'} />
        </svg>
        <span className="description">Главная</span>
      </NavLink>

      <NavLink
        to="/dashboard/diagram"
        exact
        className="link"
        activeClassName="activeLink"
      >
        <svg class="icon-navifation" width="38" height="38">
          <use href={sprite + '#statistics-page-mobile-icon'} />
        </svg>
        <span className="description">Статистика</span>
      </NavLink>
      <NavLink
        to="/dashboard/currency"
        exact
        className="link"
        activeClassName="activeLink"
      >
        <svg class="icon-navifation" width="38" height="38">
          <use href={sprite + '#currency-page-mobile-icon'} />
        </svg>
      </NavLink>
    </nav>
  );
}
