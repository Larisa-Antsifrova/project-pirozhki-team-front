import axios from 'axios';
import {
  getCategories,
  addTransactions,
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
    console.log({ data });
    dispatch(addTransactions({ data }));
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesOperation = () => async dispatch => {
  try {
    const result = await axios.get('/categories/hardcoded');
    if (result.status === 200) {
      dispatch(getCategories(result));
    }
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export { addTransactionOperation, getCategoriesOperation };
