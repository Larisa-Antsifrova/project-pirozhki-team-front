import React from 'react';
import { useSelector } from 'react-redux';
import { transactions, totals } from '../../redux/finance/financeSelectors';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';

import ButtonAddTransactions from '../ButtonAddTransactions';
import HomeTab from './HomeTab';

import cn from 'classnames';

import './HomeTab.scss';

const HomeTabContainer = () => {
  const transactionsList = useSelector(transactions);
  const total = useSelector(totals);

  let balance = total.balance;
  let prevSum = 0;

  const calculateLeftBalance = (sum, income) => {
    const currentBalance = balance;
    const currentSum = prevSum;

    balance = balance - prevSum;
    prevSum = income ? sum : -sum;

    return String(currentBalance - currentSum);
  };

  return (
    <>
      <>
        <div className={cn('tableHeader', 'tableHeaderCommon')}>
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
        <div className="transactionsListData">
          {transactionsList &&
            transactionsList.map(
              ({ id, comment, sum, category, income, date }) => {
                return (
                  <HomeTab
                    totals={total.balance}
                    key={id}
                    comment={comment}
                    sum={sum}
                    category={category}
                    income={income}
                    date={date}
                    balance={calculateLeftBalance(sum, income)}
                  />
                );
              },
            )}
          <LoadMoreButton />
        </div>
      </>
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTabContainer;
