// https://swiperjs.com/get-started#installation
import {mainNavOpenClose} from './moblie-nav.js';
import Swiper from 'swiper';
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';


new Swiper('.swiper', {
  // Опции Swiper
  loop: true, // бесконечный цикл
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

mainNavOpenClose();
