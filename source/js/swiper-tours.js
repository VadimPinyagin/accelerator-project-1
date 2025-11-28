import Swiper from 'swiper';
import {TOURS_SPASE_MOBILE, TOURS_SPASE_TABLET} from './constants.js';

export const initSwiperTours = () => {
  new Swiper('.tours__cotnainer', {
    direction: 'horizontal',
    breakpoints: {
      0: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: TOURS_SPASE_MOBILE,
      },
      768: {
        loop: true,
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: TOURS_SPASE_TABLET,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
};
