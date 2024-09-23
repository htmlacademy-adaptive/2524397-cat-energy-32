const navMain = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav__list--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav__list--closed')) {
    navMain.classList.remove('nav__list--closed');
    navMain.classList.add('nav__list--opened');
  } else {
    navMain.classList.add('nav__list--closed');
    navMain.classList.remove('nav__list--opened');
  }
});

const input = document.querySelector('.subscribe__input');
const subsButton = document.querySelector('.subscribe__button');

subsButton.addEventListener('click', () => {
  if (input.checkValidity()) {
    input.classList.add('subscribe__input--valid');
  } else {
    input.classList.add('subscribe__input--error');
  }
});
