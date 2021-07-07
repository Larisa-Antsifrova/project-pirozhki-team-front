import React from 'react';
import './Balance.scss';

const Balance = () => (
  <div className="balance">
    <p className="balanceTitle">Ваш баланс</p>
    <p className="balanceTotal">
      <span className="balanceSymbol">₴</span> 24 000.00
    </p>
  </div>
);

export default Balance;
