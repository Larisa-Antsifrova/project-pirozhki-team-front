import React from 'react';
import { useSelector } from 'react-redux';
import { transactions } from '../../redux/finance/financeSelectors';

import HomeTabMobile from './HomeTabMobile';
import ButtonAddTransactions from '../ButtonAddTransactions';

import './HomeTabMobile.scss';

const HomeTabMobileContainer = () => {
  const transactionsList = useSelector(transactions);

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
          />
        ))}
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTabMobileContainer;
