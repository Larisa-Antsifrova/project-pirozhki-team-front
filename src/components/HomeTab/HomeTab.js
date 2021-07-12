import React from 'react';
import './HomeTab.scss';

const HomeTab = ({ category, income, date, comment, sum }) => {
  let dateNew = new Date(date);

  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };
  const localData = dateNew.toLocaleDateString('ua-UA', options);

  return (
    <>
      <div className="dataList">
        <p className="dataElement">
          <span>{localData}</span>
        </p>
        <p className="dataElementCenter">
          <span>{income ? '+' : '-'}</span>
        </p>
        <p className="dataElement">
          <span>{category}</span>
        </p>
        <p className="dataElement">
          <span>{comment}</span>
        </p>
        <p
          className={income ? 'dataElementRightPlus' : 'dataElementRightMinus'}
        >
          <span>{sum}</span>
        </p>
        <p className="dataElementRight">
          <span>6900.00</span>
        </p>
      </div>
    </>
  );
};

export default HomeTab;
