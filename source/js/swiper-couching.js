import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import {TOURS_SPACE_MOBILE, TOURS_SPACE_TABLET, TOURS_SPACE_DESKTOP} from './constants.js';

export const initSwiperCoaching = () => {
  new Swiper('.instructors', {
    direction: 'horizontal',
    modules: [Navigation],
    breakpoints: {
      0: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: TOURS_SPACE_MOBILE,
      },
      768: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: TOURS_SPACE_TABLET + 2,
      },
      1440: {
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: TOURS_SPACE_DESKTOP,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
};
