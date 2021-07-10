import React from 'react';
import './HomeTab.scss';

const HomeTab = () => {
  return (
    <>
      <div className="dataList">
        <p className="dataElement">
          <span>04.01.19</span>
        </p>
        <p className="dataElementCenter">
          <span>-</span>
        </p>
        <p className="dataElement">
          <span>Разное</span>
        </p>
        <p className="dataElement">
          <span>Подарок жене</span>
        </p>
        <p className="dataElementRight">
          <span>300.00</span>
        </p>
        <p className="dataElementRight">
          <span>6900.00</span>
        </p>
      </div>
    </>
  );
};

export default HomeTab;
