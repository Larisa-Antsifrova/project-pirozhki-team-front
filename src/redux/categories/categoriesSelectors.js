import { createSelector } from 'reselect';

export const categories = state => state.categories;

export const incomeCategories = createSelector(categories, cat => {
  return cat.filter(c => c.income).map(c => ({ value: c.name, label: c.name }));
});

export const expenseCategories = createSelector(categories, cat => {
  return cat
    .filter(c => !c.income)
    .map(c => ({ value: c.name, label: c.name }));
});
