import { createReducer } from '@reduxjs/toolkit';
import isModalAddTransactionOpenActions from './isModalAddTransactionOpenActions';

const isModalAddTransactionOpen = createReducer(false, {
  [isModalAddTransactionOpenActions]: (state, _) => !state,
});

export default isModalAddTransactionOpen;
