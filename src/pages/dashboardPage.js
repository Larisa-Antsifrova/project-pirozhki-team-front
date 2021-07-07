import React from 'react';
import Navigation from '../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Header from '../components/Header';

const DashboardPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      <Header />
      {biggerThan767 ? (
        <div>
          <Navigation />
        </div>
      ) : (
        <div>
          <Navigation />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
