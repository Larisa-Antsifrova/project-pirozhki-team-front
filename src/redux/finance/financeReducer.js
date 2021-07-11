import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import financeActions from './financeActions';

const totalBalance = createReducer(null, {
  [financeActions.totalBalanceSuccess]: (_, { payload }) => payload,
});

const statistics = createReducer(null, {
  [financeActions.statisticsSuccess]: (_, { payload }) => payload,
});

const isLoadingStatistics = createReducer(true, {
  [financeActions.statisticsRequest]: () => true,
  [financeActions.statisticsSuccess]: () => false,
  [financeActions.statisticsError]: () => false,
});

export default combineReducers({
  totalBalance,
  statistics,
  isLoadingStatistics,
});
