import React from 'react';
import { useSelector } from 'react-redux';
import { transactions } from '../../redux/finance/financeSelectors';
import './HomeTab.scss';
import HomeTab from './HomeTab';

const HomeTabContainer = () => {
  const transactionsList = useSelector(transactions);

  return (
    <>
      <div className="tableHeader">
        <p className="tableHeaderElement">
          <span>Дата</span>
        </p>
        <p className="tableHeaderElementCenter">
          <span>Тип</span>
        </p>
        <p className="tableHeaderElement">
          <span>Категория</span>
        </p>
        <p className="tableHeaderElement">
          <span>Комментарий</span>
        </p>
        <p className="tableHeaderElementRight">
          <span>Сумма</span>
        </p>
        <p className="tableHeaderElementRight">
          <span>Баланс</span>
        </p>
      </div>
      {transactionsList &&
        transactionsList.map(({ id, comment, sum, category, income, date }) => (
          <HomeTab
            key={id}
            comment={comment}
            sum={sum}
            category={category}
            income={income}
            date={date}
          />
        ))}
    </>
  );
};

export default HomeTabContainer;
