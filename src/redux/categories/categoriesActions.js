import { createAction } from '@reduxjs/toolkit';

export const fetchCategoriesRequest = createAction(
  'finance/fetchCategoriesRequest',
);
export const fetchCategoriesSuccess = createAction(
  'finance/fetchCategoriesSuccess',
);
export const fetchCategoriesError = createAction(
  'finance/fetchCategoriesError',
);
