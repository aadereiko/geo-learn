import React, { useEffect, useState } from 'react';
import countriesCapitals from '../../mock/countries-capitals.json';
import { Countries } from './Countries';

export const CountriesContainer = () => {
  const [countries] = useState(countriesCapitals);

  return <Countries countries={countries} />;
};
