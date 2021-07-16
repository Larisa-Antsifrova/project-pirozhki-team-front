import React from 'react';

import Currency from '../../components/Currency/Currency';
import { Redirect } from 'react-router';

import { useMediaPredicate } from 'react-media-hook';

import './CurrencyTabPage.scss';

const CurrencyTabPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>{biggerThan767 ? <Redirect to="/dashboard/home" /> : <Currency />}</>
  );
};

export default CurrencyTabPage;
