import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Currency.scss';

const Currency = () => {
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
        setError(e);
      }
    }

    getCurrency();
  }, []);

  const currencyFiltered = currency.filter(curr => {
    return curr.ccy !== 'BTC';
  });

  return (
    <>
      <div className="currencyTable">
        <div className="currencyHead">
          <p>Валюта</p>
          <p>Покупка</p>
          <p>Продажа</p>
        </div>
        <div className="currencyDiv">
          {!isLoaded && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
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
};

export default Currency;
