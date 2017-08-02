import React from 'react';
import PropTypes from 'prop-types';

import Slide from '../Slide';
import { H1 } from '../Caption';

const Cover = ({ children }) => (
  <Slide>
    <H1>{children}</H1>
  </Slide>
);

Cover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cover;
