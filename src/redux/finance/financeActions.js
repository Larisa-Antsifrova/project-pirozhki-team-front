import { createAction } from '@reduxjs/toolkit';

const totalBalanceRequest = createAction('finance/totalBalanceRequest');
const totalBalanceSuccess = createAction('finance/totalBalanceSuccess');
const totalBalanceError = createAction('finance/totalBalanceError');

const statisticsRequest = createAction('finance/statisticsRequest');
const statisticsSuccess = createAction('finance/statisticsSuccess');
const statisticsError = createAction('finance/statisticsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  statisticsRequest,
  statisticsSuccess,
  statisticsError,
};
