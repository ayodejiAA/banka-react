import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  onFocus,
  error
}) => (
  <>
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      id={name}
      onChange={onChange}
      onFocus={onFocus}
    />
    {error && <span className="input-validation-error">{error}</span>}
  </>
);

Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  error: ''
};


Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string
};

export default Input;
