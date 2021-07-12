import axios from 'axios';
import financeActions from './financeActions';

const totalBalance = () => async dispatch => {
  dispatch(financeActions.totalBalanceRequest());

  try {
    const { data } = await axios.get('/transactions');
    const totalBalance = data.data.totals.balance;
    dispatch(financeActions.totalBalanceSuccess(totalBalance));
  } catch (error) {
    dispatch(financeActions.totalBalanceError());
  }
};

const statistics = (month, year) => async dispatch => {
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { totalBalance, statistics };
