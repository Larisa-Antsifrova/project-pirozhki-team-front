import React from 'react';
import './HomeTabMobile.scss';

const HomeTabMobile = () => {
  return (
    <ul className="transactionCard">
      <li className="transactionCardElement">
        <span className="elementName">Дата</span>{' '}
        <span className="elementData">04.01.19</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Тип</span>
        <span className="elementData">-</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Категория</span>
        <span className="elementData">Разное</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Комментарий</span>
        <span className="elementData">Подарок жене</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Сумма</span>
        <span className="elementDataPrice">300.00</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Баланс</span>
        <span className="elementData">6 900.00</span>
      </li>
    </ul>
  );
};

export default HomeTabMobile;
