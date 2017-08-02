import React from 'react';
import PropTypes from 'prop-types';

import './H1.css';

const H1 = ({ children }) => (
  <h1 className="caption__h1">{children}</h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
