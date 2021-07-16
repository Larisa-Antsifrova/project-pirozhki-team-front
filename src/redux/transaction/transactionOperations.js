import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionActions';

export const addTransaction = transaction => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const {
      data: { data },
    } = await axios.post('/transactions', transaction);

    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};
