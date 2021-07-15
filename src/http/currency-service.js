import axios from 'axios';

export async function fetchCurrencies() {
  try {
    const storedRates = JSON.parse(localStorage.getItem('currencyRates'));

    if (storedRates) {
      const oneHour = 1000 * 60 * 60; // 1 hour in miliseconds
      const currentTime = Date.now();

      if (currentTime - storedRates.time < oneHour) {
        return storedRates.data;
      }
    }

    const {
      data: { data },
    } = await axios.get('https://awesome-wallet-app.herokuapp.com/currency');

    const time = Date.now();
    localStorage.setItem('currencyRates', JSON.stringify({ data, time }));

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
