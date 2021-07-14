import axios from 'axios';
import {
  getCategories,
  addTransaction,
} from '../isModalAddTransactionOpen/isModalAddTransactionOpenActions';

const addTransactionOperation = (transaction, token) => async dispatch => {
  try {
    const { data } = await axios({
      method: 'post',
      data: transaction,
      url: '/transactions',
      headers: {
        Authorization: token,
      },
    });
    dispatch(addTransaction(data));
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesOperation = () => async dispatch => {
  try {
    const result = await axios.get('/categories');
    if (result.status === 200) {
      dispatch(getCategories(result));
    }
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addTransactionOperation,
  getCategoriesOperation,
};
