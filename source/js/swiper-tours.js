import Swiper from 'swiper';
import {TOURS_SPACE_MOBILE, TOURS_SPACE_TABLET} from './constants.js';

export const initSwiperTours = () => {
  new Swiper('.tours__cotnainer', {
    direction: 'horizontal',
    breakpoints: {
      0: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: TOURS_SPACE_MOBILE,
      },
      768: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: TOURS_SPACE_TABLET,
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
