import axios from 'axios';

import {
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
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

// eslint-disable-next-line import/no-anonymous-default-export
export { addTransactionOperation };
