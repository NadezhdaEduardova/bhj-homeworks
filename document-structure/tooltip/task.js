const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
const div = document.createElement('div');

div.className = 'tooltip';

tooltips.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();

    target = event.target;

    if (target.title === div.innerText) {
      div.classList.toggle('tooltip_active');
      return;
    } 
  })
})
