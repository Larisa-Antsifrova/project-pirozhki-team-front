import React from 'react';
import './HomeTabMobile.scss';
import cn from 'classnames';
// import { useSelector } from 'react-redux';
// import { totals } from '../../redux/finance/financeSelectors';

const HomeTabMobile = ({ category, income, date, comment, sum }) => {
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
        <span className="elementData">5000</span>
      </li>
    </ul>
  );
};

export default HomeTabMobile;
