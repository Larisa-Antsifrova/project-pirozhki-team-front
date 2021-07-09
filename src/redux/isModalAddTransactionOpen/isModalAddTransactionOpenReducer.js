import { createReducer } from '@reduxjs/toolkit';
import isModalAddTransactionOpenActions from './isModalAddTransactionOpenActions';

const isModalAddTransactionOpen = createReducer(true, {
  [isModalAddTransactionOpenActions]: (state, _) => !state,
});

export default isModalAddTransactionOpen;
