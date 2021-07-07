import React, { useEffect, useState } from 'react';
import './Currency.scss';
// import axios from 'axios';

const Currency = () => {
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //   const currencyPrivat = async () => {
  //     try {
  //       let response = await axios.get(
  //         'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  //       );
  //       console.log(response.data);
  //       return response.data;
  //     } catch (e) {
  //       console.log(`😱 I can't believe it: ${e}`);
  //     }
  //   };

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setCurrency(result);
          console.log(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        },
      );
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
