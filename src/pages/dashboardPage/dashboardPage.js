import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import { useMediaPredicate } from 'react-media-hook';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import Currency from '../../components/Currency/Currency';
import Container from '../../components/Container';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import './dashboardPage.scss';
import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchTransactions } from '../../redux/finance/financeOperations';
import HomeTabPage from '../homeTabPage';

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
            {/* <Navigation /> */}
            <Switch>
              <Route path="/dashboard/home" component={HomeTabPage} />
              {/* <Route path="/dashboard/diagram" component={DiagramTab} /> */}
              <Route path="/dashboard/currency" component={Currency} />
            </Switch>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
