import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalAddTransactionOpen } from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenActions';
import { onModalAddTransactionOpen } from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenSelectors';

import ModalAddTransaction from '../ModalAddTransaction';
import Modal from '../Modal';
import './ButtonAddTransactions.scss';
import sprite from '../../images/sprite.svg';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddTransactionOpen());

  const isModalAddTransactionOpen = useSelector(onModalAddTransactionOpen);

  console.log('isModalAddTransactionOpen', isModalAddTransactionOpen);

  return (
    <>
      <div className="add-transactions-container">
        <button
          className="add-transactions__button"
          type="button"
          onClick={onToggleModal}
        >
          <svg className="add-button-icon">
            <use href={sprite + '#remove-button-icon'} />
          </svg>
        </button>
      </div>

      {isModalAddTransactionOpen && (
        <Modal onClose={onToggleModal}>
          <ModalAddTransaction onClose={onToggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
