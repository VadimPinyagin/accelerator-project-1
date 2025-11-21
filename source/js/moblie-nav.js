const body = document.querySelector('.page__body');
const btnBurger = body.querySelector('.nav__btn-burger');
const mainNav = body.querySelector('.nav');
const menuItems = mainNav.querySelectorAll('.nav-menu__item');

export function mainNavOpenClose() {
  if (btnBurger) {
    btnBurger.addEventListener('click', () => {
      mainNav.classList.toggle('nav--menu-is-open');
      mainNav.classList.toggle('nav--menu-is-close');

      if (mainNav.classList.contains('nav--menu-is-open')) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      mainNav.classList.remove('nav--menu-is-open');
      mainNav.classList.add('nav--menu-is-close');
      body.classList.remove('lock');
    });
  });
}
