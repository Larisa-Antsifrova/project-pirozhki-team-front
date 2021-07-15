import React from 'react';
import { useSelector } from 'react-redux';
import './Balance.scss';
import { totals } from '../../redux/finance/financeSelectors';

const Balance = () => {
  const total = useSelector(totals);

  return (
    <div className="balance">
      <p className="balanceTitle">Ваш баланс</p>
      <p className="balanceTotal">
        <span className="balanceSymbol">$</span> {total && total.balance}
      </p>
    </div>
  );
};
export default Balance;
