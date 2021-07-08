import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isModalAddTransactionOpenActions from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenActions';
import selectors from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenSelectors';
import ModalAddTransaction from '../ModalAddTransaction';
import Modal from '../Modal';
import './ButtonAddTransactions.scss';
import PropTypes from 'prop-types';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(isModalAddTransactionOpenActions());
  const isModalOpen = useSelector(state =>
    selectors.isModalAddTransactionOpen(state),
  );

  return (
    <>
      <button type="button" onClick={onToggleModal}>
        Кнопка
      </button>

      {isModalOpen && (
        <Modal>
          <ModalAddTransaction />
        </Modal>
      )}
    </>
  );
};

ButtonAddTransactions.defaultProps = {
  // autoComplete: null,
};

ButtonAddTransactions.propTypes = {
  // autoComplete: PropTypes.string,
};

export default ButtonAddTransactions;
