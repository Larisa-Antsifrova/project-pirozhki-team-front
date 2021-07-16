import { createReducer } from '@reduxjs/toolkit';
import {
  modalAddTransactionOpen,
  addTransactionsSuccess,
} from './isModalAddTransactionOpenActions';

const modalAddTransactionOpenReducer = createReducer(false, {
  [modalAddTransactionOpen]: (state, _) => !state,
});

const transactionAdd = createReducer([], {
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

// eslint-disable-next-line import/no-anonymous-default-export
export { modalAddTransactionOpenReducer, transactionAdd };
