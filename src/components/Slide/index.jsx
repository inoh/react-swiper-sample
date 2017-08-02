import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Slide = ({ children }) => (
  <div className="swiper-slide">
    <div className="slide">{children}</div>
  </div>
);

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slide;
