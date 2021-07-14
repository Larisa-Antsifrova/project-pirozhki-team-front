import { createAction } from '@reduxjs/toolkit';

const modalAddTransactionOpen = createAction('modal/modalAddTransactionOpen');

const getCategories = createAction('transactions/getCategories', payload => ({
  payload: payload.data,
}));

const addTransaction = createAction('transaction/add');

// eslint-disable-next-line import/no-anonymous-default-export
export { getCategories, addTransaction, modalAddTransactionOpen };
