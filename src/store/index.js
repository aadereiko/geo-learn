import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/reducer';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
