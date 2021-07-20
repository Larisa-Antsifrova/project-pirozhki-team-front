import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatistics,
  costsIncomeTotals,
  isLoadingStatistic,
  getFirstTransactionDate,
} from '../../redux/finance/financeSelectors';
import { getStatisticsData } from '../../redux/finance/financeOperations';
import { MONTH, NO_TRANSACTION } from '../../helpers/constants';
import { getYear, isEmpty } from '../../helpers/operation';
import SmallSpinner from '../SmallSpinner';
import Chart from '../Chart';
import Table from '../Table';
import SelectMonthYear from '../SelectMonthYear';
import './DiagramTab.scss';

const DiagramTab = () => {
  const todayYear = getYear(new Date());

  const [seletcMonth, setSeletcMonth] = useState(null);
  const [seletcYear, setSeletcYear] = useState(null);
  const [year, setYaer] = useState([{ value: todayYear, label: todayYear }]);

  const dispatch = useDispatch();
  const statistics = useSelector(getStatistics);
  const costsIncome = useSelector(costsIncomeTotals);
  const isLoading = useSelector(isLoadingStatistic);

  const firstTransactionDate = useSelector(getFirstTransactionDate);

  useEffect(() => {
    dispatch(getStatisticsData(seletcMonth, seletcYear));
  }, [dispatch, seletcMonth, seletcYear]);

  useEffect(() => {
    if (firstTransactionDate && !isEmpty(firstTransactionDate)) {
      const transactionYear = getYear(new Date(firstTransactionDate));
      const difference = todayYear - transactionYear;

      const setYear = () => {
        if (year.includes(transactionYear)) {
          return;
        }
        if (transactionYear === todayYear) {
          return;
        }
        setYaer(prevArray => [...prevArray, transactionYear]);
        for (let i = 1; i <= difference; i++) {
          if (year.includes(transactionYear + i)) {
            return;
          }
          setYaer(prevArray => [
            ...prevArray,
            { value: transactionYear + i, select: transactionYear + i },
          ]);
        }
      };

      setYear();
    }
  }, [firstTransactionDate, todayYear, year]);

  const onSelectMonth = itemTitle => {
    setSeletcMonth(itemTitle.value);
  };

  const onSelectYear = itemTitle => setSeletcYear(itemTitle.value);

  return (
    <>
      <div className="diagramTab">
        <h2 className="diagramTabTitle">Статистика</h2>
        <div className="diagramTabChartTable">
          <div className="chartContent">
            {isLoading ? (
              <div className="diagramTabSpinner">
                <SmallSpinner color={'#4a56e2'} size={80} />
              </div>
            ) : (
              <Chart
                tempData={
                  statistics.length > 0
                    ? statistics.filter(stat => !stat.income)
                    : NO_TRANSACTION
                }
                totalBalance={costsIncome.balance}
              />
            )}
          </div>
          <div className="tableContainer">
            <div className="dropdownContainer">
              <SelectMonthYear
                month={MONTH}
                year={year}
                onSelectMonth={onSelectMonth}
                onSelectYear={onSelectYear}
              />
            </div>
            <div>
              {statistics && (
                <Table
                  tempData={
                    statistics.length > 0
                      ? statistics.filter(stat => !stat.income)
                      : NO_TRANSACTION
                  }
                  costsIncome={costsIncome}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagramTab;
