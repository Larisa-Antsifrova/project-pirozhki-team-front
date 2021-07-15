import axios from 'axios';

export async function fetchCurrencies() {
  const {
    data: { data },
  } = await axios.get('https://awesome-wallet-app.herokuapp.com/currency');

  return data;
}
