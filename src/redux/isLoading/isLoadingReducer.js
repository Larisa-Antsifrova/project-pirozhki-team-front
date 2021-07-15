import { createReducer } from '@reduxjs/toolkit';
import financeActions from '../finance/financeActions';

const isLoading = createReducer(true, {
  [financeActions.fetchTransactionsRequest]: () => true,
  [financeActions.fetchTransactionsSuccess]: () => false,
  [financeActions.fetchTransactionsError]: () => false,
});

export default isLoading;
