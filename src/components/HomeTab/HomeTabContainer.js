import React from 'react';
import { useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/finance/financeSelectors';
import './HomeTab.scss';
import HomeTab from './HomeTab';

const HomeTabContainer = () => {
  const getTransactions = useSelector(fetchTransactions);
  console.log(getTransactions);

  const { data } = getTransactions;
  console.log(data);
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
      <HomeTab />
    </>
  );
};

export default HomeTabContainer;
