import { createAction } from '@reduxjs/toolkit';

export const modalAddTransactionOpen = createAction(
  'modal/modalAddTransactionOpen',
);

export const getCategoriesRequest = createAction(
  'transactions/getCategoriesRequest',
);
export const getCategoriesSuccess = createAction(
  'transactions/getCategoriesSuccess',
);
export const getCategoriesError = createAction(
  'transactions/getCategoriesError',
);

export const addTransactionsRequest = createAction('transaction/addRequest');
export const addTransactionsSuccess = createAction('transaction/addSuccess');
export const addTransactionsError = createAction('transaction/addError');

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   addTransactionsRequest,
//   addTransactionsSuccess,
//   addTransactionsError,
//   getCategories,
//   modalAddTransactionOpen,
// };
