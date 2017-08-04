import React, { Component } from 'react';

import 'swiper/dist/css/swiper.min.css';
import './App.css';

import Swiper from 'swiper/dist/js/swiper.min';

import Pagination from '../components/Pagination';
import Pages from '../components/Pages';

class App extends Component {
  static options = {
    speed: 1000,
    // direction: 'vertical',
    // loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    keyboardControl: true,
    paginationType: 'fraction',
    effect: 'cube', // fade, flip, cube, coverflow
  };

  componentDidMount() {
    new Swiper(this.refs.swiperContainer, App.options);
  }

  render() {
    return (
      <div className="swiper-container" ref="swiperContainer">
        <Pages />

        <Pagination />
      </div>
    );
  }
}

export default App;
