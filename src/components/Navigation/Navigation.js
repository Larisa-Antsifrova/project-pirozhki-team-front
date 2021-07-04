import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/home" exact className="link" activeClassName="activeLink">
        Главная
      </NavLink>

      <NavLink
        to="/diagram"
        exact
        className="link"
        activeClassName="activeLink"
      >
        Статистика
      </NavLink>
    </nav>
  );
}
