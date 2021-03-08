import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { CountriesWrapperElement } from './elements';
import { countryPropType } from '../../shared';

export const Countries = ({ countries }) => {
  return (
    <CountriesWrapperElement>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Num</th>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(({ country, capital }, idx) => (
            <tr key={country}>
              <td>{idx + 1}</td>
              <td>
                <b>{country}</b>
              </td>
              <td>{capital}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CountriesWrapperElement>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf(countryPropType),
};
