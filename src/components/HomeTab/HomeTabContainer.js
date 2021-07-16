import React from 'react';
import { useSelector } from 'react-redux';
import { transactions, totals } from '../../redux/finance/financeSelectors';
import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';

import ButtonAddTransactions from '../ButtonAddTransactions';
import HomeTab from './HomeTab';
import Spinner from '../Spinner';
import cn from 'classnames';

import './HomeTab.scss';

const HomeTabContainer = () => {
  const transactionsList = useSelector(transactions);
  const totalList = useSelector(totals);
  const isLoading = useSelector(getIsLoading);
  // console.log(transactionsList);

  // const currentBalance =
  //   transactionsList &&
  //   transactionsList.reduce((acc, el) => {
  //     const newArr = [];
  //     newArr.push(el.income ? acc + el.sum : acc - el.sum);
  //     // console.log(newArr);
  //     // // console.log(el.income ? acc + el.sum : acc - el.sum);
  //     // // console.log('el.sum', el.comment);
  //     return newArr;
  //   }, 0);

  // console.log(currentBalance);
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
      </>
      {/* )} */}
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTabContainer;
