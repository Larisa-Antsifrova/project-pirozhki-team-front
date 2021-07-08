import React from 'react';
import Container from '../components/Container';
import ModalLogout from '../components/ModalLogout';
import Chart from '../components/Chart';
import Table from '../components/Table';

// Testing array
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
    value: 100.323242342,
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

const totalBalance = 230000000000;

const ErrorPage = () => {
  return (
    <Container>
      <h2>Not Found</h2>
      <ModalLogout />
      <Chart tempData={tempData} totalBalance={totalBalance} />
      <Table tempData={tempData} />
    </Container>
  );
};

export default ErrorPage;
