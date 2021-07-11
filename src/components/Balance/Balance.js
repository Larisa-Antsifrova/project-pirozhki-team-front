import React from 'react';
import { useSelector } from 'react-redux';
import './Balance.scss';
// import { fetchTotals } from '../../redux/finance/financeOperations';
// import { useDispatch } from 'react-redux';

const Balance = () => {
  const balance = useSelector(state => state.finance.totalBalance);

  return (
    <div className="balance">
      <p className="balanceTitle">Ваш баланс</p>
      <p className="balanceTotal">
        <span className="balanceSymbol">$</span> {balance} 24000.00
      </p>
    </div>
  );
};
export default Balance;
