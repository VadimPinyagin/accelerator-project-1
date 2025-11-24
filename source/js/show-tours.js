import '../sass/common/base.scss';
import '../sass/common/vareables.scss';
import {BODY, MOBILE_WIDTH} from './constants.js';

const tours = BODY.querySelector(".tours");
const btnShowTours = tours.querySelector(".tours__show-more");
const toursCard = Array.from(tours.querySelectorAll(".tours-list"));

export const showTours = () => {
  window.addEventListener('resize', showTours);
  if (MOBILE_WIDTH.matches) {
    btnShowTours.classList.remove("hidden");  // Если окно меньше 321px
  } else {
    btnShowTours.classList.add("hidden"); // Удаляем класс, если больше
  }

  toursCard.forEach((item,index) => {
    item.classList.add('hidden')
    if(index == 0) {
      item.classList.remove('hidden')
    }
  })
}
