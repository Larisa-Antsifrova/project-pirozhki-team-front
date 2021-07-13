import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';
import {
  getStatistics,
  costsIncomeTotals,
} from '../../redux/finance/financeSelectors';
import { getStatisticsData } from '../../redux/finance/financeOperations';
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

const noTransaction = [
  {
    category: 'У вас нету транзакций',
    income: false,
    sum: 0,
    color: '#e9e9e9',
  },
];

const DiagramTab = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(getStatistics);
  const costsIncome = useSelector(costsIncomeTotals);
  const isLoading = useSelector(getIsLoading);
  const [seletcMonth, setSeletcMonth] = useState(null);
  const [seletcYear, setSeletcYear] = useState(null);

  useEffect(() => {
    dispatch(getStatisticsData(seletcMonth, seletcYear));
  }, [dispatch, seletcYear, seletcMonth]);

  const onSelectMonth = itemTitle => {
    const monthNum = month.indexOf(itemTitle) + 1;
    setSeletcMonth(`${monthNum < 10 ? `0${monthNum}` : monthNum}`);
  };

  const onSelectYear = itemTitle => setSeletcYear(itemTitle);

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
              totalBalance={costsIncome.balance}
            />
            <div className="tableContainer">
              <div className="dropdownContainer">
                <SelectMonthYear
                  title={
                    seletcMonth ? month[parseInt(seletcMonth - 1)] : 'Месяц'
                  }
                  list={month}
                  onChange={onSelectMonth}
                />
                <SelectMonthYear
                  title={seletcYear ? seletcYear : 'Год'}
                  list={year}
                  onChange={onSelectYear}
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
