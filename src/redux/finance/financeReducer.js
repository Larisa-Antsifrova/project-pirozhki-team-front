import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import financeActions from './financeActions';

const transactions = createReducer([], {
  [financeActions.fetchTransactionsSuccess]: (_, { payload }) => payload,
});
const statistics = createReducer(null, {
  [financeActions.statisticsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  transactions,
  statistics,
});
