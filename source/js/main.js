// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import {mainNavOpenClose} from "./moblie-nav.js";


import Swiper from 'swiper';
// импортируем стили Swiper
import 'swiper/css';

// создаём экземпляр Swiper
const swiper = new Swiper('.swiper', {
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
