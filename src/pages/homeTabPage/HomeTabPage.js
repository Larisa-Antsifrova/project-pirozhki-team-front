import React from 'react';
import { useMediaPredicate } from 'react-media-hook';

import HomeTabContainer from '../../components/HomeTab';
import HomeTabMobileContainer from '../../components/HomeTabMobile';

import './HomeTabPage.scss';

const HomeTabPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>{biggerThan767 ? <HomeTabContainer /> : <HomeTabMobileContainer />}</>
  );
};

export default HomeTabPage;
