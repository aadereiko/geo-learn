import PropTypes from 'prop-types';

export const countryPropType = PropTypes.shape({
  country: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
});
