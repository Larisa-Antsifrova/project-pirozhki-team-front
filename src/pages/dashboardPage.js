import React from 'react';
import Navigation from '../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Header from '../components/Header';
import Balance from '../components/Balance';
import ButtonAddTransactions from '../components/ButtonAddTransactions';
import Currency from '../components/Currency/Currency';
import Container from '../components/Container';
import HomeTabMobile from '../components/HomeTabMobile/HomeTabMobile';
import HomeTabContainer from '../components/HomeTab/HomeTabContainer';
import HomeTab from '../components/HomeTab';

const DashboardPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      <Header />
      <Container>
        {biggerThan767 ? (
          <div>
            <Navigation />
          </div>
        ) : (
          <div>
            <Navigation />
          </div>
        )}
        {/* <Balance />
        <Currency /> */}
        <ButtonAddTransactions />
        <HomeTabContainer />
        {/* <HomeTabMobile /> */}
      </Container>
    </>
  );
};

export default DashboardPage;
