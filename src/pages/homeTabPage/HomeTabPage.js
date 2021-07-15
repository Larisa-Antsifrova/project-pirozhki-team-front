import React from 'react';
import Currency from '../../components/Currency/Currency';
import HomeTabContainer from '../../components/HomeTab';
import HomeTabMobileContainer from '../../components/HomeTabMobile';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import { useMediaPredicate } from 'react-media-hook';

const HomeTabPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      {biggerThan767 ? (
        <>
          <Balance />
          <Currency />
          <HomeTabContainer />
          <ButtonAddTransactions />
        </>
      ) : (
        <>
          <Balance />
          <HomeTabMobileContainer />
        </>
      )}
    </>
  );
};

export default HomeTabPage;
