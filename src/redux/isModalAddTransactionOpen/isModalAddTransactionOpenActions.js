import { createAction } from '@reduxjs/toolkit';

const modalAddTransactionOpen = createAction('modal/modalAddTransactionOpen');

const getCategories = createAction('transactions/getCategories');

const addTransactions = createAction('transaction/add');

// eslint-disable-next-line import/no-anonymous-default-export
export { getCategories, addTransactions, modalAddTransactionOpen };
