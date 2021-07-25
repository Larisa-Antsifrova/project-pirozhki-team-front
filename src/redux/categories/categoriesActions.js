import { createAction } from '@reduxjs/toolkit';

export const fetchCategoriesRequest = createAction(
  'categories/fetchCategoriesRequest',
);
export const fetchCategoriesSuccess = createAction(
  'categories/fetchCategoriesSuccess',
);
export const fetchCategoriesLogout = createAction(
  'categories/fetchCategoriesLogout',
);
export const fetchCategoriesError = createAction(
  'categories/fetchCategoriesError',
);
