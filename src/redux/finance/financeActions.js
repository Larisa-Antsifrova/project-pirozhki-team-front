import { createAction } from '@reduxjs/toolkit';

const totalBalanceRequest = createAction('finance/totalBalanceRequest');
const totalBalanceSuccess = createAction('finance/totalBalanceSuccess');
const totalBalanceError = createAction('finance/totalBalanceError');

// eslint-disable-next-line import/no-anonymous-default-export
export default { totalBalanceRequest, totalBalanceSuccess, totalBalanceError };
