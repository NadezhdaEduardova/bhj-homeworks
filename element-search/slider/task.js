const arrSlides = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.getElementsByClassName('slider__arrow_prev');
const next = document.getElementsByClassName('slider__arrow_next');
let item = 0;

prev.onclick = () => {    
    arrSlides[item].classList.remove('slider__item_active');
    if (item === 0) {
      item = arrSlides.length - 1;
    } else {
      item--;
    }
    arrSlides[item].classList.add('slider__item_active');
}

next.onclick = () => {
    arrSlides[item].classList.remove('slider__item_active');
    if (item === arrSlides.length - 1) {
      item = 0;
    } else {
      item++;
    }
    arrSlides[item].classList.add('slider__item_active');
}
