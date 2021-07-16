import { createReducer } from '@reduxjs/toolkit';
import { fetchCategoriesSuccess } from './categoriesActions';

export const categories = createReducer([], {
  [fetchCategoriesSuccess]: (_, { payload }) => payload,
});
