const sidebar__mobile = document.querySelector('.nav-sidebar__mobile');
const transfer__menu = document.querySelector('.mobile__transfer__menu');
sidebar__mobile.addEventListener('click', function (event) {
  event.preventDefault();
  sidebar__mobile.style.display = 'none';
  transfer__menu.style.display = 'flex';
  
});