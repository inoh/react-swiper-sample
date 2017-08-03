import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from '../Caption';

const Cover = ({ children }) => (
  <H1>{children}</H1>
);

Cover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cover;
