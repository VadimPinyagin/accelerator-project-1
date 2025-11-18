const btnBurger = document.querySelector('.nav__btn-burger');
const mainNav = document.querySelector('.nav');
mainNav.classList.add('main-nav--is-close');

export function mainNavOpenClose(){

  if (btnBurger) {
    btnBurger.addEventListener('click', () => {
      mainNav.classList.toggle('nav--menu-is-open');
      mainNav.classList.toggle('nav--menu-is-close');
    });
  }
}
