import React from 'react';
import './HomeTabMobile.scss';

const HomeTabMobile = ({ category, income, date, comment, sum }) => {
  let dateNew = new Date(date);

  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };
  const localData = dateNew.toLocaleDateString('ua-UA', options);

  return (
    <ul className={income ? 'transactionCardGreen' : 'transactionCardRose'}>
      <li className="transactionCardElement">
        <span className="elementName">Дата</span>{' '}
        <span className="elementData">{localData}</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Тип</span>
        <span className="elementData">{income ? '+' : '-'}</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Категория</span>
        <span className="elementData">{category}</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Комментарий</span>
        <span className="elementData">{comment}</span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Сумма</span>
        <span className={income ? 'elementDataPlus' : 'elementDataMinus'}>
          {sum}
        </span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Баланс</span>
        <span className="elementData">6 900.00</span>
      </li>
    </ul>
  );
};

export default HomeTabMobile;
