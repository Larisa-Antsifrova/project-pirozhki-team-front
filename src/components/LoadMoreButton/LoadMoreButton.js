import React, { useState } from 'react';
import { getMonth } from '../../helpers/operation';
import { fetchTransactions } from '../../redux/finance/financeOperations';
import { useDispatch } from 'react-redux';

import './LoadMoreButton.scss';

export const LoadMoreButton = () => {
  const today = new Date();
  const currentMonth = getMonth(today) - 1;
  const correctCurrentMonth =
    currentMonth > 10 ? currentMonth : `0${currentMonth}`;

  const dispatch = useDispatch();

  const [month, setMonth] = useState(correctCurrentMonth);

  const LoadMore = () => {
    dispatch(fetchTransactions(month));
    console.log(month);
    setMonth(month => {
      const finalMonth = month - 1;
      return finalMonth > 10 ? finalMonth : `0${finalMonth}`;
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
  console.log(nameOfNextMonth);
  return (
    <>
      <button className="loadMoreButton" onClick={LoadMore}>
        Загрузить транзакции за {monthNames[nameOfNextMonth]}
      </button>
    </>
  );
};
