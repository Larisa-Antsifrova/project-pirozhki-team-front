import React, { useEffect, useState } from 'react';
import { fetchCurrencies } from '../../http/currency-service';
import './Currency.scss';

const Currency = () => {
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getCurrency() {
      try {
        const result = await fetchCurrencies();

        setIsLoaded(true);
        setCurrency(result);
      } catch (e) {
        setIsLoaded(true);
        setError(e);
      }
    }

    getCurrency();
  }, [error]);

  return (
    <div className="currencyTable">
      <div className="currencyHead">
        <p className="ccy">Валюта</p>
        <p className="buy">Покупка</p>
        <p className="sale">Продажа</p>
      </div>
      <div className="currencyBody">
        {!isLoaded && <div className="currencyLoader">Loading...</div>}
        {error && (
          <div>
            <p>— Что мы говорим Богу валют?</p>
            <p>— Не сегодня!</p>
          </div>
        )}
        {currency?.map(({ ccy, buy, sale }) => {
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
  );
};

export default Currency;
