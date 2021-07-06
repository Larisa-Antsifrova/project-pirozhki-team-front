import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './components/Spinner';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './stylesheet/base.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <PersistGate loading={<Spinner />} persistor={store.persistor}>
        <Provider store={store.store}>
          <App />
        </Provider>
      </PersistGate>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
