import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH} from './constants.js';
import {mainNavOpenClose} from './moblie-nav.js';
import {initSwiperHero} from './swiper-hero.js';
import { initSwiperTours } from './swiper-tours.js';


if(MOBILE_WIDTH.matches) {
  console.log('Мобилка');
} else if (TABLET_WIDTH.matches) {
  console.log('Планшетка');
} else if (DESKTOP_WIDTH.matches) {
  console.log('Десктопка');
}


mainNavOpenClose();
initSwiperHero();
initSwiperTours();
