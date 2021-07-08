import React from 'react';
import Container from '../components/Container';
import ModalLogout from '../components/ModalLogout';
import Chart from '../components/Chart';
import Table from '../components/Table';

// Testing array
const tempData = [
  {
    name: 'Машина',
    sum: 40,
    income: false,
    color: '#6e78e8',
  },
  {
    name: 'Продукты',
    sum: 50,
    income: false,
    color: '#4a56e2',
  },
  {
    name: 'Забота о себе',
    sum: 60,
    income: false,
    color: '#81e1ff',
  },
  {
    name: 'Забота о детях',
    sum: 70,
    income: false,
    color: '#24cca7',
  },
  {
    name: 'Товары для дома',
    sum: 80,
    income: false,
    color: '#00ad84',
  },
  {
    name: 'Образование',
    sum: 90,
    income: false,
    color: '#c5baff',
  },
  {
    name: 'Досуг',
    sum: 100.323242342,
    income: false,
    color: '#fd9498',
  },
  {
    name: 'Другие расходы',
    sum: 110,
    income: false,
    color: '#ffd8d0',
  },
  {
    name: 'Основные расходы',
    sum: 150,
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
