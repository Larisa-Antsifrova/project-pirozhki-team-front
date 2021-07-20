import axios from 'axios';
import financeActions from './financeActions';
import { getDaysInMonth, getMonth, getYear } from '../../helpers/operation';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

export const fetchTransactions = (month, year) => async dispatch => {
  const today = new Date();
  const mm = getMonth(today);
  const yyyy = getYear(today);
  const startDate = `${year ? year : yyyy}-${month ? month : mm}-01`;
  const endDate = `${year ? year : yyyy}-${month ? month : mm}-${getDaysInMonth(
    +`${year ? year : yyyy}`,
    +`${month ? month : mm}`,
  )}`;

  dispatch(financeActions.fetchTransactionsRequest());

  try {
    const { data } = await axios.get(
      `/transactions?startDate=${startDate}&endDate=${endDate}`,
    );
    dispatch(financeActions.fetchTransactionsSuccess(data.data.transactions));
    dispatch(financeActions.totalBalanceSuccess(data.data.totals));
  } catch (error) {
    dispatch(financeActions.fetchTransactionsError());
  }
};

export const getStatisticsData = (month, year) => async dispatch => {
  const today = new Date();
  const mm = getMonth(today);
  const yyyy = getYear(today);
  const startDate = `${year ? year : yyyy}-${month ? month : mm}-01`;
  const endDate = `${year ? year : yyyy}-${month ? month : mm}-${getDaysInMonth(
    +`${year ? year : yyyy}`,
    +`${month ? month : mm}`,
  )}`;

  dispatch(financeActions.statisticsRequest());
  try {
    const { data } = await axios.get(
      `/statistics?startDate=${startDate}&endDate=${endDate}`,
    );
    dispatch(financeActions.statisticsSuccess(data.data));
  } catch (error) {
    dispatch(financeActions.statisticsError());
  }
};
