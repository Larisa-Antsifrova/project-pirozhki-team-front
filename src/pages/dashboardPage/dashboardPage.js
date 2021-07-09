import React from 'react';
import Navigation from '../../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import Currency from '../../components/Currency/Currency';
import Container from '../../components/Container';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import './dashboardPage.scss';

const DashboardPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      <Header />
      <Container>
        <div className="dashboard">
          <div className="oneBlock">
            {biggerThan767 ? (
              <div>
                <Navigation />
              </div>
            ) : (
              <div>
                <Navigation />
              </div>
            )}
            <Balance />
            <Currency />
          </div>
          <div className="twoBlock">
            <DiagramTab />
          </div>
          <ButtonAddTransactions />
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
