import { Pie, defaults } from 'react-chartjs-2';
import './Chart.scss';

defaults.plugins.title.display = true;
defaults.plugins.legend.display = false;
defaults.font.family = 'Poppins';

const Chart = () => {
  const tempData = [
    {
      name: 'Машина',
      value: 40,
      income: false,
      color: '#6e78e8',
    },
    {
      name: 'Продукты',
      value: 50,
      income: false,
      color: '#4a56e2',
    },
    {
      name: 'Забота о себе',
      value: 60,
      income: false,
      color: '#81e1ff',
    },
    {
      name: 'Забота о детях',
      value: 70,
      income: false,
      color: '#24cca7',
    },
    {
      name: 'Товары для дома',
      value: 80,
      income: false,
      color: '#00ad84',
    },
    {
      name: 'Образование',
      value: 90,
      income: false,
      color: '#c5baff',
    },
    {
      name: 'Досуг',
      value: 100,
      income: false,
      color: '#fd9498',
    },
    {
      name: 'Другие расходы',
      value: 110,
      income: false,
      color: '#ffd8d0',
    },
    {
      name: 'Основные расходы',
      value: 150,
      income: false,
      color: '#fed057',
    },
  ];

  const totalBalance = '$ 23.000';
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
