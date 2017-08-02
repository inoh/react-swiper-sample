import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import Slide from '../Slide';

const Syntax = ({ children }) => (
  <Slide>
    <SyntaxHighlighter language='javascript' style={docco}>{children}</SyntaxHighlighter>
  </Slide>
);

Syntax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Syntax;
