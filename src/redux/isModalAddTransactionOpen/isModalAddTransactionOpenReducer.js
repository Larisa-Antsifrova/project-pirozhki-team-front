import { createReducer } from '@reduxjs/toolkit';
import { modalAddTransactionOpen } from './isModalAddTransactionOpenActions';

export const isAddTransactionModalOpen = createReducer(false, {
  [modalAddTransactionOpen]: (state, _) => !state,
});
