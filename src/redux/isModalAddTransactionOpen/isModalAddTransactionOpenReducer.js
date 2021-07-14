import { createReducer } from '@reduxjs/toolkit';
import {
  modalAddTransactionOpen,
  getCategories,
} from './isModalAddTransactionOpenActions';

const modalAddTransactionOpenReducer = createReducer(false, {
  [modalAddTransactionOpen]: (state, _) => !state,
});

const initialState = [];

const categories = createReducer(initialState, {
  [getCategories]: (_, { payload }) => payload,
});

// eslint-disable-next-line import/no-anonymous-default-export
export { modalAddTransactionOpenReducer, categories };
