import React from 'react';
import { useSelector } from 'react-redux';
import { transactions, totals } from '../../redux/finance/financeSelectors';
// import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';

import ButtonAddTransactions from '../ButtonAddTransactions';
import HomeTab from './HomeTab';
// import Spinner from '../Spinner';
import cn from 'classnames';

import './HomeTab.scss';

const HomeTabContainer = () => {
  const transactionsList = useSelector(transactions);
  const totalList = useSelector(totals);
  console.log(transactionsList);

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
