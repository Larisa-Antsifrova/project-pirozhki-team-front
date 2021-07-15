import { createReducer } from '@reduxjs/toolkit';
import {
  modalAddTransactionOpen,
  getCategoriesSuccess,
  addTransactionsSuccess,
} from './isModalAddTransactionOpenActions';

const modalAddTransactionOpenReducer = createReducer(false, {
  [modalAddTransactionOpen]: (state, _) => !state,
});

const transactionAdd = createReducer([], {
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

const categories = createReducer([], {
  [getCategoriesSuccess]: (_, { payload }) => payload,
});

// eslint-disable-next-line import/no-anonymous-default-export
export { modalAddTransactionOpenReducer, categories, transactionAdd };
