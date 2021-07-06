import { createReducer } from '@reduxjs/toolkit';
import isModalLogoutOpenActions from './isModalLogoutOpenActions';

const isModalLogoutOpen = createReducer(false, {
  [isModalLogoutOpenActions]: (state, _) => !state,
});

export default isModalLogoutOpen;
