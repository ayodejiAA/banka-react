import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isBtnLoading, children }) => (
  <button type="submit" className={`btn ${isBtnLoading ? 'loading' : ''}`} disabled={isBtnLoading}>{children}</button>
);

export default Button;

Button.propTypes = {
  isBtnLoading: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};
