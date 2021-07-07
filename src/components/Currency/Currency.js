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
        <div>
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th>Валюта</th>
                <th>Покупка</th>
                <th>Продажа</th>
              </tr>
            </thead>
            <tbody>
              {currencyFiltered.map(({ ccy, buy, sale }) => {
                const buyFixed = parseFloat(buy).toFixed(2);
                const saleFixed = parseFloat(sale).toFixed(2);
                return (
                  <tr key={ccy}>
                    <td className="tableDataCurrency">{ccy}</td>
                    <td className="tableDataBuy">{buyFixed}</td>
                    <td className="tableDataSale">{saleFixed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default Currency;
