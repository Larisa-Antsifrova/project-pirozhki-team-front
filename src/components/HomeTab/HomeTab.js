import React from 'react';
import './HomeTab.scss';

const HomeTab = () => {
  return (
    <>
      <ul className="tableHeader">
        <li className="tableHeaderElement">
          <span>Дата</span>
        </li>
        <li className="tableHeaderElementCenter">
          <span>Тип</span>
        </li>
        <li className="tableHeaderElement">
          <span>Категория</span>
        </li>
        <li className="tableHeaderElement">
          <span>Комментарий</span>
        </li>
        <li className="tableHeaderElementRight">
          <span>Сумма</span>
        </li>
        <li className="tableHeaderElementRight">
          <span>Баланс</span>
        </li>
      </ul>
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
