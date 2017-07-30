import React, { Component } from 'react';

import 'swiper/dist/css/swiper.min.css';
import './App.css';

import Swiper from 'swiper/dist/js/swiper.min';

import Pagination from '../components/Pagination';
import Slide from '../components/Slide';

class App extends Component {
  static options = {
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
  };

  static data = [
    {
      id: 1,
      value: 'slide1',
    },
    {
      id: 2,
      value: 'slide2',
    },
    {
      id: 3,
      value: 'slide3',
    },
  ];

  componentDidMount() {
    new Swiper(this.refs.swiperContainer, App.options);
  }

  render() {
    return (
      <div className="swiper-container" ref="swiperContainer">
        <div className="swiper-wrapper">
          {App.data.map(slide => <Slide key={slide.id}>{slide.value}</Slide>)}
        </div>

        <Pagination />
      </div>
    );
  }
}

export default App;
