import React from 'react';
import PropTypes from 'prop-types';

import { H2 } from '../Caption';

const Item = ({ children }) => (
  <li>{children}</li>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const List = ({ children, title }) => (
  <div>
    {title && <H2>{title}</H2>}

    <ul>
      {children}
    </ul>
  </div>
);

List.defaultProps = {
  title: null,
};

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export {
  List as default,
  Item,
};
