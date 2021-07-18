import Select from 'react-select';
import './SelectMonthYear.scss';

const SelectMonthYear = ({ month, year, onSelectMonth, onSelectYear }) => {
  return (
    <div className="dropdownWrapper">
      <Select
        options={month}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Месяц"
        onChange={onSelectMonth}
      />
      <Select
        options={year}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Год"
        onChange={onSelectYear}
      />
    </div>
  );
};

export default SelectMonthYear;
