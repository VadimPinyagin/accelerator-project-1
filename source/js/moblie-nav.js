import {BODY} from './constants.js';
export const btnBurger = BODY.querySelector('.nav__btn-burger');
export const mainNav = BODY.querySelector('.nav');
export const menuItems = mainNav.querySelectorAll('.nav-menu__item');

export function mainNavOpenClose() {
  if (btnBurger) {
    btnBurger.addEventListener('click', () => {
      mainNav.classList.toggle('nav--menu-is-open');
      mainNav.classList.toggle('nav--menu-is-close');

      if (mainNav.classList.contains('nav--menu-is-open')) {
        BODY.classList.add('lock');
      } else {
        BODY.classList.remove('lock');
      }
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      mainNav.classList.remove('nav--menu-is-open');
      mainNav.classList.add('nav--menu-is-close');
      BODY.classList.remove('lock');
    });
  });
}
