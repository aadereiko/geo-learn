import { createSelector } from '@reduxjs/toolkit';

const countriesSliceSelector = (state) => state.countries;

export const countriesSelector = createSelector(
  countriesSliceSelector,
  ({ countries }) => countries,
);
