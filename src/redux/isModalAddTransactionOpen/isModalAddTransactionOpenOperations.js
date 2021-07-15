import axios from 'axios';

import {
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from '../isModalAddTransactionOpen/isModalAddTransactionOpenActions';

const addTransactionOperation = transaction => async dispatch => {
  dispatch(addTransactionsRequest());

  try {
    const response = await axios.post('/transactions', transaction);
    dispatch(addTransactionsSuccess(response));
  } catch (error) {
    dispatch(addTransactionsError(error.message));
  }
};

const getCategoriesOperation = () => async dispatch => {
  dispatch(getCategoriesRequest());

  try {
    const response = await axios.get('/categories/hardcoded');
    dispatch(getCategoriesSuccess(response));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export { addTransactionOperation, getCategoriesOperation };
