import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ tempData, costsIncome }) => {
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
          {data.map(({ category, sum, color }) => (
            <tr key={category}>
              <td className="tableCategories">
                <span
                  className="tableCategoriesColor"
                  style={{
                    backgroundColor: `${color}`,
                  }}
                ></span>
                {category}
              </td>
              <td className="tableSum">
                {Number.isInteger(sum)
                  ? `${sum}.00`
                  : Math.round(sum * 100) / 100}
              </td>
            </tr>
          ))}
          <tr className="tableCostsIncome">
            <td>Расходы:</td>
            <td className="tableCostsValue tableSum">{costsIncome.expense}</td>
          </tr>
          <tr className="tableCostsIncome">
            <td>Доходы:</td>
            <td className="tableIncomeValue tableSum">{costsIncome.income}</td>
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
