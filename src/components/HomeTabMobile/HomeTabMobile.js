import React from 'react';

import cn from 'classnames';

import './HomeTabMobile.scss';

const HomeTabMobile = ({
  category,
  income,
  date,
  comment,
  sum,
  balance,
  deleteTransaction,
}) => {
  const incomingDate = new Date(date);
  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };
  const localData = incomingDate.toLocaleDateString('ua-UA', options);

  return (
    <ul className={cn('transactionCard', income && 'borderLeftGreen')}>
      <li className="transactionCardElement">
        <span className="elementName">Дата</span>
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
        <span className={cn('elementPrice', income && 'elementPriceGreen')}>
          {sum}
        </span>
      </li>
      <li className="transactionCardElement">
        <span className="elementName">Баланс</span>
        <span className="elementData">{balance}</span>
      </li>
      <button
        className={cn(
          income ? 'buttonMobileDeleteGreen' : 'buttonMobileDelete',
        )}
        onClick={deleteTransaction}
      >
        Удалить
      </button>
    </ul>
  );
};

export default HomeTabMobile;
