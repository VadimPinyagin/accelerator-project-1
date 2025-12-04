import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export const initSwiperTours = () => {
  new Swiper('.tours__cotnainer', {
    direction: 'horizontal',
    modules: [Navigation],
    breakpoints: {
      0: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      768: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1440: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
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
