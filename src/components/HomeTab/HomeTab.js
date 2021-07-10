import React from 'react';
import './HomeTab.scss';

const HomeTab = () => {
  return (
    <>
      <ul className="dataList">
        <li className="dataElement">
          <span>04.01.19</span>
        </li>
        <li className="dataElementCenter">
          <span>-</span>
        </li>
        <li className="dataElement">
          <span>Разное</span>
        </li>
        <li className="dataElement">
          <span>Подарок жене</span>
        </li>
        <li className="dataElementRight">
          <span>300.00</span>
        </li>
        <li className="dataElementRight">
          <span>6900.00</span>
        </li>
      </ul>
    </>
  );
};

export default HomeTab;
