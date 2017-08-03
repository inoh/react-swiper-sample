import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const Syntax = ({ children }) => (
  <SyntaxHighlighter language='javascript' style={docco}>{children}</SyntaxHighlighter>
);

Syntax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Syntax;
