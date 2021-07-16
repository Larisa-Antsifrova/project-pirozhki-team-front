import { createSelector } from 'reselect';

export const categories = state => state.categories;

export const incomeCategories = createSelector(categories, cat => {
  return cat.filter(c => c.income);
});

export const expenseCategories = createSelector(categories, cat => {
  return cat.filter(c => !c.income);
});
