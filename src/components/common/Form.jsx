import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, handleSubmit }) => (
  <form className="form" id="register__form" onSubmit={handleSubmit}>
    {children}
  </form>
);

export default Form;

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes
    .object, PropTypes.node])).isRequired,
  handleSubmit: PropTypes.func.isRequired
};
