import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import './index.css';

const Syntax = ({ lang, children }) => (
  <div className="syntax__wrapper">
    <SyntaxHighlighter language={lang} style={docco}>{children}</SyntaxHighlighter>
  </div>
);

Syntax.defaultProps = {
  language: 'javascript',
};

Syntax.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Syntax;
