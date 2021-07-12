import { createReducer } from '@reduxjs/toolkit';
import financeActions from '../finance/financeActions';

const isLoading = createReducer(true, {
  [financeActions.totalBalanceRequest]: () => true,
  [financeActions.totalBalanceSuccess]: () => false,
  [financeActions.totalBalanceError]: () => false,

  [financeActions.statisticsRequest]: () => true,
  [financeActions.statisticsSuccess]: () => false,
  [financeActions.statisticsError]: () => false,
});

export default isLoading;
