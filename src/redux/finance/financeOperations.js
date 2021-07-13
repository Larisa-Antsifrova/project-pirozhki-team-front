import axios from 'axios';
import financeActions from './financeActions';
import { getDaysInMonth, getMonth, getYear } from '../../heplers/operation';

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

// eslint-disable-next-line import/no-anonymous-default-export
export default { totalBalance, statistics };
