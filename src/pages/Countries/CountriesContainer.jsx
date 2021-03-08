import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import countriesCapitals from '../../mock/countries-capitals.json';
import { countriesSelector } from '../../store/countries';
import { setCountriesAction } from '../../store/countries/reducer';
import { Countries } from './Countries';

export const CountriesContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);

  useEffect(() => {
    dispatch(setCountriesAction({ countries: countriesCapitals }));
  }, [dispatch]);

  return <Countries countries={countries} />;
};
