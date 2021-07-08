import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ tempData }) => {
  const data = useMemo(() => tempData, [tempData]);

  return (
    <div>
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th className="tableHeaderCategories">Категория</th>
            <th className="tableHeaderSum">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, value, color }) => (
            <tr key={name}>
              <td className="tableCategories">
                <span
                  className="tableCategoriesColor"
                  style={{
                    backgroundColor: `${color}`,
                  }}
                ></span>
                {name}
              </td>
              <td className="tableSum">
                {Number.isInteger(value)
                  ? `${value}.00`
                  : Math.round(value * 100) / 100}
              </td>
            </tr>
          ))}
          <tr className="tableCostsIncome">
            <td>Расходы:</td>
            <td className="tableCostsValue tableSum">24.950</td>
          </tr>
          <tr className="tableCostsIncome">
            <td>Доходы:</td>
            <td className="tableIncomeValue tableSum">29.950</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tempData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
