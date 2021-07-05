import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/home"
        exact
        className="navLink"
        activeClassName="navActiveLink"
      >
        Главная
      </NavLink>

      <NavLink
        to="/diagram"
        exact
        className="navLink"
        activeClassName="navActiveLink"
      >
        Статистика
      </NavLink>
    </nav>
  );
}
