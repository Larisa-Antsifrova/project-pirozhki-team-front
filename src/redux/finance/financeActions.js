import { createAction } from '@reduxjs/toolkit';

const fetchTransactionsRequest = createAction(
  'finance/fetchTransactionsRequest',
);
const fetchTransactionsSuccess = createAction(
  'finance/fetchTransactionsSuccess',
);
const fetchTransactionsError = createAction('finance/fetchTransactionsError');

const statisticsRequest = createAction('finance/statisticsRequest');
const statisticsSuccess = createAction('finance/statisticsSuccess');
const statisticsError = createAction('finance/statisticsError');

const logoutRequest = createAction('finance/logoutRequest');
const logoutSuccess = createAction('finance/logoutSuccess');
const logoutError = createAction('finance/logoutError');

const deleteTransactionRequest = createAction(
  'finance/deleteTransactionRequest',
);
const deleteTransactionSuccess = createAction(
  'finance/deleteTransactionSuccess',
);
const deleteTransactionError = createAction('finance/deleteTransactionError');
const totalBalanceRequest = createAction('finance/totalBalanceRequest');
const totalBalanceSuccess = createAction('finance/totalBalanceSuccess');
const totalBalanceError = createAction('finance/totalBalanceError');
const totalBalanceLogoutSuccess = createAction(
  'finance/totalBalanceLogoutSuccess',
);

const addTransactionRequest = createAction('transaction/addRequest');
const addTransactionSuccess = createAction('transaction/addSuccess');
const addTransactionError = createAction('transaction/addError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  totalBalanceLogoutSuccess,
  statisticsRequest,
  statisticsSuccess,
  statisticsError,
  logoutRequest,
  logoutSuccess,
  logoutError,
};
