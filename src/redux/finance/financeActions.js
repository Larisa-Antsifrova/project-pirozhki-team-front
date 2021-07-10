import { createAction } from '@reduxjs/toolkit';

const totalBalanceRequest = createAction('finance/totalBalanceRequest');
const totalBalanceSuccess = createAction('finance/totalBalanceSuccess');
const totalBalanceError = createAction('finance/totalBalanceError');

const fetchTransactionsRequest = createAction(
  'finance/fetchTransactionsRequest',
);
const fetchTransactionsSuccess = createAction(
  'finance/fetchTransactionsSuccess',
);
const fetchTransactionsError = createAction('finance/fetchTransactionsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
};
