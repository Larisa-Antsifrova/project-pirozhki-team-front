import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactions, totals } from '../../redux/finance/financeSelectors';
// import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';

import { deleteTransaction } from '../../redux/finance/financeOperations';

import ButtonAddTransactions from '../ButtonAddTransactions';
import HomeTab from './HomeTab';
// import Spinner from '../Spinner';
import cn from 'classnames';

import './HomeTab.scss';

const HomeTabContainer = () => {
  const transactionsList = useSelector(transactions);
  const totalList = useSelector(totals);

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

  const dispatch = useDispatch();

  const onDeleteTransaction = id => dispatch(deleteTransaction(id));

  return (
    <>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
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
                    totals={totalList.balance}
                    key={id}
                    comment={comment}
                    sum={sum}
                    category={category}
                    income={income}
                    date={date}
                    balance={calculateLeftBalance(sum, income)}
                    deleteTransaction={() => onDeleteTransaction(id)}
                  />
                );
              },
            )}
        </div>
      </>
      {/* )} */}
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTabContainer;
