import React from 'react';
import { useSelector } from 'react-redux';
import { transactions } from '../../redux/finance/financeSelectors';
import './HomeTabMobile.scss';
import HomeTabMobile from './HomeTabMobile';

const HomeTabMobileContainer = () => {
  const transactionsList = useSelector(transactions);

  return (
    <>
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
    </>
  );
};

export default HomeTabMobileContainer;
