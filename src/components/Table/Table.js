import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ tempData, costsIncome }) => {
  const data = useMemo(() => tempData, [tempData]);
  const { expense, income } = useMemo(() => costsIncome, [costsIncome]);

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
            <td className="tableCostsValue tableSum">{expense}</td>
          </tr>
          <tr className="tableCostsIncome">
            <td>Доходы:</td>
            <td className="tableIncomeValue tableSum">{income}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tempData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      category: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
      income: PropTypes.bool.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  costsIncome: PropTypes.shape({
    expense: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
  }).isRequired,
};

export default Table;
