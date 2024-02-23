// Для проверки работы скриптов в браузере
if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}


// Меню
const menu = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.header-nav__toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('header-nav--open');
});
