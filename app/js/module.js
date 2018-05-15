// section do
const sidebar__mobile = document.querySelector('.nav-sidebar__mobile');
const transfer__menu = document.querySelector('.mobile__transfer__menu');
const btn__close = document.querySelector('.btn__close');
sidebar__mobile.addEventListener('click', function (event) {
  event.preventDefault();
  sidebar__mobile.style.display = 'none';
  transfer__menu.style.display = 'flex';
});
btn__close.addEventListener('click', function(e) {
  sidebar__mobile.style.display = 'flex';
  transfer__menu.style.display = 'none';
});

// section team

const sidebar__mobile = document.querySelector('.menu__accordeon__item');
const transfer__menu = document.querySelector('.mobile__transfer__menu');
const btn__close = document.querySelector('.btn__close');
