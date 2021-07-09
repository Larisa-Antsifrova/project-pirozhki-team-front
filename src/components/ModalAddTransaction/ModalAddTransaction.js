import React from 'react';
import './ModalAddTransaction.scss';
const ModalAddTransaction = ({ onClose }) => {
  return (
    <>
      <button onClick={onClose}>x</button>
      <h2>Добавить транзакцию</h2>

      <p>Доход</p>

      <p>Расход</p>
    </>
  );
};

export default ModalAddTransaction;
