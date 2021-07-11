import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import Currency from '../../components/Currency/Currency';
import Container from '../../components/Container';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import HomeTabContainer from '../../components/HomeTab/HomeTabContainer';
import HomeTabMobileContainer from '../../components/HomeTabMobile/HomeTabMobileContainer';
import './dashboardPage.scss';

import { useDispatch } from 'react-redux';
import { fetchTransactions } from '../../redux/finance/financeOperations';

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTransactions()), [dispatch]);

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
          <HomeTabMobileContainer />
          {/* <HomeTabContainer /> */}
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
