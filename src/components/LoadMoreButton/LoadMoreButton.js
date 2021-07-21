import React, { useState } from 'react';
import { getMonth } from '../../helpers/operation';
import { fetchTransactions } from '../../redux/finance/financeOperations';
import { useDispatch } from 'react-redux';

import './LoadMoreButton.scss';

export const LoadMoreButton = () => {
  const today = new Date();
  const currentMonth = getMonth(today) - 1;
  const correctCurrentMonth =
    currentMonth >= 10 ? currentMonth : `0${currentMonth}`;

  const dispatch = useDispatch();

  const [month, setMonth] = useState(correctCurrentMonth);
  console.log(month);

  const LoadMore = () => {
    dispatch(fetchTransactions(month));
    setMonth(month => {
      const finalMonth = month - 1;
      const checkLastMonth = finalMonth === 0 ? 12 : finalMonth;

      return checkLastMonth >= 10 ? checkLastMonth : `0${checkLastMonth}`;
    });
  };

  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const nameOfNextMonth = month > 9 ? month : month - 0;

  return (
    <>
      <button className="loadMoreButton" onClick={LoadMore}>
        Загрузить транзакции за {monthNames[nameOfNextMonth - 1]}
      </button>
    </>
  );
};
