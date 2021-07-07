import React from 'react';
import Navigation from '../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Container from '../components/Container';
import Header from '../components/Header';
import Balance from '../components/Balance';

const DashboardPage = () => {
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      <Container>
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
        <Balance />
      </Container>
    </>
  );
};

export default DashboardPage;
