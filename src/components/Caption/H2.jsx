import React from 'react';
import PropTypes from 'prop-types';

import './H2.css';

const H2 = ({ children }) => (
  <h2 className="caption__h2">{children}</h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
