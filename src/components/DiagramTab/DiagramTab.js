import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../redux/isLoading/isLoadingSelectors';
import {
  getStatistics,
  costsIncomeTotals,
} from '../../redux/finance/financeSelectors';
import { getRegisterDataUser } from '../../redux/auth/authSelectors';
import { getYear } from '../../helpers/operation';
import operations from '../../redux/finance/financeOperations';
import { MONTH, NO_TRANSACTION } from '../../helpers/constants';
import Spinner from '../Spinner';
import Chart from '../Chart';
import Table from '../Table';
import SelectMonthYear from '../SelectMonthYear';
import './DiagramTab.scss';

const year = [];

const DiagramTab = () => {
  const [seletcMonth, setSeletcMonth] = useState(null);
  const [seletcYear, setSeletcYear] = useState(null);

  const dispatch = useDispatch();
  const statistics = useSelector(getStatistics);
  const costsIncome = useSelector(costsIncomeTotals);
  const isLoading = useSelector(getIsLoading);
  const registerDateUser = useSelector(getRegisterDataUser);
  const registerYearUser = getYear(new Date(registerDateUser));

  useEffect(() => {
    dispatch(operations.statistics(seletcMonth, seletcYear));
  }, [dispatch, seletcYear, seletcMonth]);

  useEffect(() => {
    const registerYear = registerYearUser;
    const todayYear = getYear(new Date());
    const difference = todayYear - registerYear;
    const setYear = () => {
      year.push(registerYear);
      if (registerYear === todayYear) {
        return;
      }
      for (let i = 1; i <= difference; i++) {
        year.push(registerYear + i);
      }
    };

    setYear();
  }, [registerYearUser]);

  const onSelectMonth = itemTitle => {
    const monthNum = MONTH.indexOf(itemTitle) + 1;
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
              tempData={statistics.length > 0 ? statistics : NO_TRANSACTION}
              totalBalance={costsIncome.balance}
            />
            <div className="tableContainer">
              <div className="dropdownContainer">
                <SelectMonthYear
                  title={
                    seletcMonth ? MONTH[parseInt(seletcMonth - 1)] : 'Месяц'
                  }
                  list={MONTH}
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
                  tempData={statistics.length > 0 ? statistics : NO_TRANSACTION}
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
