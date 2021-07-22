import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import financeActions from './financeActions';

const transactions = createReducer([], {
  [financeActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [financeActions.fetchTransactionsSuccess]: (state, { payload }) => {
    return [...state, ...payload];
  },

  [financeActions.addTransactionSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

const totalBalance = createReducer(
  {},
  {
    [financeActions.totalBalanceSuccess]: (_, { payload }) => payload,
  },
);
const statistics = createReducer(null, {
  [financeActions.statisticsSuccess]: (_, { payload }) => payload,
});

const isLoadingStatistic = createReducer(true, {
  [financeActions.statisticsRequest]: () => true,
  [financeActions.statisticsSuccess]: () => false,
  [financeActions.statisticsError]: () => false,
});

const isLoadingTransaction = createReducer(true, {
  [financeActions.totalBalanceRequest]: () => true,
  [financeActions.totalBalanceSuccess]: () => false,
  [financeActions.totalBalanceError]: () => false,

  [financeActions.fetchTransactionsRequest]: () => true,
  [financeActions.fetchTransactionsSuccess]: () => false,
  [financeActions.fetchTransactionsError]: () => false,

  [financeActions.addTransactionRequest]: () => true,
  [financeActions.addTransactionSuccess]: () => false,
  [financeActions.addTransactionError]: () => false,
});

export default combineReducers({
  transactions,
  totalBalance,
  statistics,
  isLoadingStatistic,
  isLoadingTransaction,
});
