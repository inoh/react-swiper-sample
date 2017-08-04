import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Image = ({ src }) => (
  <img src={src} className="image"></img>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image;
