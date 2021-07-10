import { createReducer } from '@reduxjs/toolkit';
import financeActions from '../finance/financeActions';

const isLoading = createReducer(true, {
  [financeActions.totalBalanceRequest]: () => true,
  [financeActions.totalBalanceSuccess]: () => false,
  [financeActions.totalBalanceError]: () => false,
});

export default isLoading;
