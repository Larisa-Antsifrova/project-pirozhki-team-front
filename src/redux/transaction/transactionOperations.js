import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionActions';

export const addTransaction = transaction => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const response = await axios.post('/transactions', transaction);
    dispatch(addTransactionSuccess(response));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};
