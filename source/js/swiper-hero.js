import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

export const initSwiperHero = () => {
  new Swiper('.hero', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
};
