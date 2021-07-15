import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import financeActions from './financeActions';

const transactions = createReducer([], {
  [financeActions.fetchTransactionsSuccess]: (_, { payload }) => payload,
});
const statistics = createReducer(null, {
  [financeActions.statisticsSuccess]: (_, { payload }) => payload,
});

const isLoadingStatistic = createReducer(true, {
  [financeActions.statisticsRequest]: () => true,
  [financeActions.statisticsSuccess]: () => false,
  [financeActions.statisticsError]: () => false,
});

export default combineReducers({
  transactions,
  statistics,
  isLoadingStatistic,
});
