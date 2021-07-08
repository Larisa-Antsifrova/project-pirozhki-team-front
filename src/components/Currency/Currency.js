import React, { useEffect, useState } from 'react';
import './Currency.scss';
import axios from 'axios';

const Currency = () => {
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getCurrency() {
    try {
      let response = await axios.get(
        'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
      );
      const result = await response.data;
      setIsLoaded(true);
      setCurrency(result);
    } catch (e) {
      setIsLoaded(true);
      setError(error);
    }
  }

  useEffect(() => {
    getCurrency();
  }, []);

  const currencyFiltered = currency.filter(curr => {
    return curr.ccy !== 'BTC';
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="currencyTable">
          <div className="currencyHead">
            <p>Валют</p>
            <p>Покупка</p>
            <p>Продажа</p>
          </div>
          <div className="currencyDiv">
            {currencyFiltered.map(({ ccy, buy, sale }) => {
              const buyFixed = parseFloat(buy).toFixed(2);
              const saleFixed = parseFloat(sale).toFixed(2);
              return (
                <div className="currencyDetails" key={ccy}>
                  <p className="ccy">{ccy}</p>
                  <p className="buy">{buyFixed}</p>
                  <p className="sale">{saleFixed}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Currency;
