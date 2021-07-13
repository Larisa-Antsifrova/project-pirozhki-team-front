import axios from 'axios';
import financeActions from './financeActions';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

export const fetchTransactions = () => async dispatch => {
  dispatch(financeActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(financeActions.fetchTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(financeActions.fetchTransactionsError());
  }
};

export const getStatisticsData = (month, year) => async dispatch => {
  dispatch(financeActions.statisticsRequest());
  function getDaysInMonth(y, m) {
    return m === 2
      ? y & 3 || (!(y % 25) && y & 15)
        ? 28
        : 29
      : 30 + ((m + (m >> 3)) & 1);
  }
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const startDate = `${year ? year : yyyy}-${month ? month : mm}-01`;
  const endDate = `${year ? year : yyyy}-${month ? month : mm}-${getDaysInMonth(
    +`${year ? year : yyyy}`,
    +`${month ? month : mm}`,
  )}`;
  try {
    const { data } = await axios.get(
      `/statistics?startDate=${startDate}&endDate=${endDate}`,
    );
    dispatch(financeActions.statisticsSuccess(data.data));
  } catch (error) {
    dispatch(financeActions.statisticsError());
  }
};
