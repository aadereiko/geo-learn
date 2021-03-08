import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, { payload: { countries } }) => {
      state.countries = countries;
    },
  },
});

export const { setCountries: setCountriesAction } = countriesSlice.actions;

export default countriesSlice.reducer;
