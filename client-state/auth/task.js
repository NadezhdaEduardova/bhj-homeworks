const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signin = document.getElementById('signin');
const button = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function openUserWindow(id) {
  userId.textContent = id;
  welcome.classList.add('welcome_active');
  signin.classList.remove('signin_active');
}

if (localStorage.id) {
  id = JSON.parse(localStorage.getItem('id'));
  openUserWindow(id);
}

button.addEventListener('click', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    if (data.success) {
      localStorage.setItem('id', JSON.stringify(data.user_id));
      openUserWindow(data.user_id);
    } else {
      overlay.classList.add('overlay_active');
      modal.classList.add('modal_active');
    }
  };
});

modalClose.addEventListener('click', () => {
  overlay.classList.remove('overlay_active');
  modal.classList.remove('modal_active');
});
