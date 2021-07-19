import Select from 'react-select';
import { getMonth, getYear } from '../../helpers/operation';
import './SelectMonthYear.scss';

const SelectMonthYear = ({ month, year, onSelectMonth, onSelectYear }) => {
  console.log(month.find(m => m.value === getMonth(new Date())));
  return (
    <div className="dropdownWrapper">
      <Select
        options={month}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Месяц"
        defaultValue={month.find(m => m.value === getMonth(new Date()))}
        onChange={onSelectMonth}
      />
      <Select
        options={year}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Год"
        onChange={onSelectYear}
        defaultValue={year.find(m => m.value === getYear(new Date()))}
      />
    </div>
  );
};

export default SelectMonthYear;
