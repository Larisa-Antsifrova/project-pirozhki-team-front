import axios from 'axios';
import financeActions from './financeActions';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

export const totalBalance = () => async dispatch => {
  dispatch(financeActions.totalBalanceRequest());

  try {
    const { data } = await axios.get('/statistics');
    dispatch(financeActions.totalBalanceSuccess(data));
  } catch (error) {
    dispatch(financeActions.totalBalanceError());
  }
};

export const fetchTransactions = () => async dispatch => {
  dispatch(financeActions.fetchTransactionsRequest());

  try {
    const {
      data: {
        data: { transactions },
      },
    } = await axios.get('/transactions');
    dispatch(financeActions.fetchTransactionsSuccess(transactions));
  } catch (error) {
    dispatch(financeActions.fetchTransactionsError());
  }
};

// export default { totalBalance, fetchTransactions };
