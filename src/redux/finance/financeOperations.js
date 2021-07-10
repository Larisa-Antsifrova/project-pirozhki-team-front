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

// eslint-disable-next-line import/no-anonymous-default-export
export default { totalBalance };
