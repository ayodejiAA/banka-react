import React from 'react';
import PropTypes from 'prop-types';

const FeatureBox = ({ feature, description, iconLink }) => (
  <div className="box">
    <img src={iconLink} alt="real-time" />
    <h2>{feature}</h2>
    <p>{description}</p>
  </div>
);

export default FeatureBox;

FeatureBox.propTypes = {
  feature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconLink: PropTypes.string.isRequired
};
