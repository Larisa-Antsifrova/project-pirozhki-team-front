import { createReducer } from '@reduxjs/toolkit';
import financeActions from '../finance/financeActions';

const isLoading = createReducer(true, {
  [financeActions.fetchTransactionsRequest]: () => true,
  [financeActions.fetchTransactionsSuccess]: () => false,
  [financeActions.fetchTransactionsError]: () => false,

  [financeActions.statisticsRequest]: () => true,
  [financeActions.statisticsSuccess]: () => false,
  [financeActions.statisticsError]: () => false,
});

export default isLoading;
