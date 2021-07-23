import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  transactions,
  totals,
  isLoadingTransaction,
} from '../../redux/finance/financeSelectors';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import SmallSpinner from '../SmallSpinner';

import HomeTabMobile from './HomeTabMobile';
import ButtonAddTransactions from '../ButtonAddTransactions';

import {
  deleteTransaction,
  fetchBalance,
} from '../../redux/finance/financeOperations';

import './HomeTabMobile.scss';

const HomeTabMobileContainer = () => {
  const transactionsList = useSelector(transactions);
  const total = useSelector(totals);
  const isLoading = useSelector(isLoadingTransaction);

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
    await dispatch(fetchBalance());
  };

  return (
    <div className="transactionCardsWrapper">
      {transactionsList && transactionsList.length > 0 ? (
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
        ))
      ) : (
        <div className="noAnyTransactions">
          В этом месяце транзакций не было
        </div>
      )}
      {isLoading && (
        <div className="homeTabMobileSpinner">
          <SmallSpinner color={'#4a56e2'} size={50} />
        </div>
      )}
      <LoadMoreButton />
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTabMobileContainer;
