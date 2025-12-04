import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export const initSwiperCoaching = () => {
  new Swiper('.instructors', {
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        centeredSlides: false,
        slidesPerView: 4,
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
