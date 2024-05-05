// Для проверки работы скриптов в браузере
if (document.querySelector('.header-nav--nojs')) {
  document.querySelector('.header-nav--nojs').classList.remove('header-nav--nojs');
}


// Меню
const menu = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.header-nav__toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('header-nav--open');
});

