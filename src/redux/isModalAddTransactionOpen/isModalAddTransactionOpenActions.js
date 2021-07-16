import { createAction } from '@reduxjs/toolkit';

export const modalAddTransactionOpen = createAction(
  'modal/modalAddTransactionOpen',
);

export const addTransactionsRequest = createAction('transaction/addRequest');
export const addTransactionsSuccess = createAction('transaction/addSuccess');
export const addTransactionsError = createAction('transaction/addError');
