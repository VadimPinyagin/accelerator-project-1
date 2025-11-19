// https://swiperjs.com/get-started#installation
import {mainNavOpenClose} from './moblie-nav.js';
import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.swiper', {
  // Опции Swiper
  loop: true, // бесконечный цикл
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});

mainNavOpenClose();
