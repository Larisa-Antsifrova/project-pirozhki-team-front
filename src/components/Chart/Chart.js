import { Pie, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './Chart.scss';

defaults.plugins.title.display = true;
defaults.plugins.legend.display = false;
defaults.font.family = 'Poppins';

const Chart = ({ tempData, totalBalance }) => {
  const centerText = [
    {
      beforeDraw: function (chart) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        ctx.font = '700 18px Circe';
        ctx.textBaseline = 'middle';
        const text = Number.isInteger(totalBalance)
            ? `${totalBalance.toLocaleString()}.00`
            : totalBalance.toLocaleString(),
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 1.9;
        ctx.fillText(text, textX, textY);

        ctx.save();
      },
    },
  ];

  return (
    <div className="chartPie">
      <Pie
        className="canvasTop"
        plugins={centerText}
        height={320}
        width={320}
        data={{
          labels: tempData.map(el => ` ${el.category}`),
          datasets: [
            {
              data: tempData.map(el => (el.sum > 0 ? el.sum : 1)),
              backgroundColor: tempData.map(el => el.color),
              hoverOffset: 2,
            },
          ],
        }}
        options={{
          cutout: '70%',
          maintainAspectRatio: false,
        }}
      ></Pie>
    </div>
  );
};

Chart.propTypes = {
  tempData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      category: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
      income: PropTypes.bool.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  totalBalance: PropTypes.number.isRequired,
};

export default Chart;
