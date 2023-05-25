const arrSlides = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];
let item = arrSlides.findIndex(element => element.className === 'slider__item slider__item_active');

prev.onclick = () => { 
    let item = arrSlides.findIndex(element => element.className === 'slider__item slider__item_active');
    arrSlides[item].classList.remove('slider__item_active');
    if (item === 0) {
      item = arrSlides.length - 1;
    } else {
      item--;
    }
    arrSlides[item].classList.add('slider__item_active');
}

next.onclick = () => {
    let item = arrSlides.findIndex(element => element.className === 'slider__item slider__item_active');
    arrSlides[item].classList.remove('slider__item_active');
    if (item === arrSlides.length - 1) {
      item = 0;
    } else {
      item++;
    }
    arrSlides[item].classList.add('slider__item_active');
}
