import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';
import {
  getTotalBalance,
  getStatistics,
  costsIncomeTotals,
} from '../../redux/finance/financeSelectors';
import operations from '../../redux/finance/financeOperations';

import Spinner from '../Spinner';
import Chart from '../Chart';
import Table from '../Table';
import SelectMonthYear from '../SelectMonthYear';
import './DiagramTab.scss';

const month = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const year = [2020, 2021, 2023];

const DiagramTab = () => {
  const dispatch = useDispatch();
  const totalBalance = useSelector(getTotalBalance);
  const statistics = useSelector(getStatistics);
  const costsIncome = useSelector(costsIncomeTotals);
  const isLoading = useSelector(getIsLoading);
  const [seletcMonth, setSeletcMonth] = useState(null);
  const [seletcYear, setSeletcYear] = useState(null);

  useEffect(() => {
    dispatch(operations.statistics(seletcMonth, seletcYear));
  }, [dispatch, seletcYear, seletcMonth]);

  const noTransaction = [
    {
      category: 'У вас нету транзакций',
      sum: 1,
      color: '#e9e9e9',
    },
  ];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="diagramTab">
          <h2 className="diagramTabTitle">Статистика</h2>
          <div className="diagramTabChartTable">
            <Chart
              tempData={statistics.length > 0 ? statistics : noTransaction}
              totalBalance={totalBalance}
            />
            <div className="tableContainer">
              <div className="dropdownContainer">
                <SelectMonthYear
                  title={'Месяц'}
                  list={month}
                  onChange={itemTitle => {
                    const monthNum = month.indexOf(itemTitle) + 1;
                    setSeletcMonth(
                      `${monthNum < 10 ? `0${monthNum}` : monthNum}`,
                    );
                  }}
                />
                <SelectMonthYear
                  title={'Год'}
                  list={year}
                  onChange={itemTitle => setSeletcYear(itemTitle)}
                />
              </div>
              <div>
                <Table
                  tempData={statistics.length > 0 ? statistics : noTransaction}
                  costsIncome={costsIncome}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DiagramTab;
