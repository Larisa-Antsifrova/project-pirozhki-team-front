import { createAction } from '@reduxjs/toolkit';

export const addTransactionRequest = createAction('transaction/addRequest');
export const addTransactionSuccess = createAction('transaction/addSuccess');
export const addTransactionError = createAction('transaction/addError');
