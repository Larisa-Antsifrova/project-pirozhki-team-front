import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactions, totals } from '../../redux/finance/financeSelectors';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';

import HomeTabMobile from './HomeTabMobile';
import ButtonAddTransactions from '../ButtonAddTransactions';

import {
  deleteTransaction,
  fetchTransactions,
} from '../../redux/finance/financeOperations';

import './HomeTabMobile.scss';

const HomeTabMobileContainer = () => {
  const transactionsList = useSelector(transactions);
  const total = useSelector(totals);

  const dispatch = useDispatch();

  let balance = total.balance;
  let prevSum = 0;

  const calculateLeftBalance = (sum, income) => {
    const currentBalance = balance;
    const currentSum = prevSum;

    balance = balance - prevSum;
    prevSum = income ? sum : -sum;

    return String(currentBalance - currentSum);
  };

  const onDeleteTransaction = async id => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchTransactions());
  };

  return (
    <div className="transactionCardsWrapper">
      {transactionsList &&
        transactionsList.map(({ id, comment, sum, category, income, date }) => (
          <HomeTabMobile
            key={id}
            comment={comment}
            sum={sum}
            category={category}
            income={income}
            date={date}
            balance={calculateLeftBalance(sum, income)}
            deleteTransaction={() => onDeleteTransaction(id)}
          />
        ))}
      <LoadMoreButton />
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTabMobileContainer;
