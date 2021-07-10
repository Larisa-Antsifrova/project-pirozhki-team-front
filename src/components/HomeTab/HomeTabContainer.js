import React from 'react';
// import { useSelector } from 'react-redux';
// import { fetchTransactions } from '../../redux/finance/financeSelectors';
import './HomeTab.scss';
import HomeTab from './HomeTab';

const HomeTabContainer = () => {
  // const transactions = useSelector(fetchTransactions);
  // console.log(transactions);

  return (
    <div>
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
      <HomeTab />
    </div>
  );
};

export default HomeTabContainer;
