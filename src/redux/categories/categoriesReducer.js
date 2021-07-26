import { createReducer } from '@reduxjs/toolkit';
import {
  fetchCategoriesSuccess,
  fetchCategoriesLogout,
} from './categoriesActions';

export const categories = createReducer([], {
  [fetchCategoriesSuccess]: (_, { payload }) => payload,
  [fetchCategoriesLogout]: () => [],
});
