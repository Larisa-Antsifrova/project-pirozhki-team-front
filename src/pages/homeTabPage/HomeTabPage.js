import React from 'react';
import Currency from '../../components/Currency/Currency';
import HomeTabContainer from '../../components/HomeTab';
import HomeTabMobileContainer from '../../components/HomeTabMobile';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import { useMediaPredicate } from 'react-media-hook';
import './HomeTabPage.scss';

const HomeTabPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      {biggerThan767 ? (
        <>
          <div className="homeTabElements">
            <div className="homeTabNavigationBalance">
              <Navigation />
              <Balance />
            </div>
            <Currency />
          </div>
          <HomeTabContainer />
          <ButtonAddTransactions />
        </>
      ) : (
        <>
          <Navigation />
          <Balance />
          <HomeTabMobileContainer />
        </>
      )}
    </>
  );
};

export default HomeTabPage;
