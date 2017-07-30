import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ children }) => (
  <div className="swiper-slide">{children}</div>
);

Slide.defaultProps = {
  children: null,
};

Slide.propTypes = {
  children: PropTypes.node,
};

export default Slide;
