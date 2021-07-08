import { Pie, defaults } from 'react-chartjs-2';
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
        const text = totalBalance,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 1.8;
        ctx.fillText(text, textX, textY);

        ctx.save();
      },
    },
  ];

  return (
    <div className="chartPie">
      <Pie
        plugins={centerText}
        height={320}
        width={320}
        data={{
          labels: tempData.map(el => ` ${el.name}`),
          datasets: [
            {
              data: tempData.map(el => el.value),
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

export default Chart;
