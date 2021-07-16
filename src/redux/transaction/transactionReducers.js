import { createReducer } from '@reduxjs/toolkit';
import { addTransactionSuccess } from './transactionActions';

export const transaction = createReducer([], {
  [addTransactionSuccess]: (_, { payload }) => payload,
});
