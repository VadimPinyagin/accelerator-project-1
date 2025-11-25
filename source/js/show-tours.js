import '../sass/common/base.scss';
import '../sass/common/vareables.scss';
import {BODY, MOBILE_WIDTH} from './constants.js';

const tours = BODY.querySelector('.tours');
const btnShowTours = tours.querySelector('.tours__show-more');
const toursCard = Array.from(tours.querySelectorAll('.tours-card'));

const openTours = () => {
  btnShowTours.addEventListener('click', () => {
    toursCard.forEach((item) => item.classList.remove('hidden'));
    btnShowTours.classList.add('hidden');
  });
};

export const showTours = () => {
  window.addEventListener('resize', showTours);
  if (MOBILE_WIDTH.matches) {
    btnShowTours.classList.remove('hidden');
  } else {
    btnShowTours.classList.add('hidden');
  }

  toursCard.forEach((item,index) => {
    if(index >= 1) {
      item.classList.add('hidden');
    } else if(index >= 5) {
      btnShowTours.classList.add('hidden');
    }
  });

  openTours();
};
