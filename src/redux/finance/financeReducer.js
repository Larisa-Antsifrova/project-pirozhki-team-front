import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import financeActions from './financeActions';

const totalBalance = createReducer(null, {
  [financeActions.totalBalanceSuccess]: (_, { payload }) => payload,
});

const transactions = createReducer([], {
  [financeActions.fetchTransactionsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  totalBalance,
  transactions,
});
