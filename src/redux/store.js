import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import isModalLogoutOpenReducer from './isModalLogoutOpen/isModalLogoutOpenReducer';

import {
  modalAddTransactionOpenReducer,
  transactionAdd,
} from './isModalAddTransactionOpen/isModalAddTransactionOpenReducer';

import auth from './auth/authReducer';
import finance from './finance/financeReducer';
import { categories } from './categories/categoriesReducer';
import isLoading from './isLoading/isLoadingReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    isModalLogoutOpen: isModalLogoutOpenReducer,
    isModalAddTransactionOpen: modalAddTransactionOpenReducer,
    auth: persistReducer(persistConfig, auth),
    finance,
    isLoading,
    categories,
    transaction: transactionAdd,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
