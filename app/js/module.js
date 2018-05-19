// VARIABLES
// adjustment
const btn__close = document.querySelector('.btn__close');
// section --do--
// --pop up--
const sidebar__mobile = document.querySelector('.nav-sidebar__mobile');
const transfer__menu = document.querySelector('.mobile__transfer__menu');
const menu__link = document.querySelectorAll('.transfer_item_link');
// section --burger--
const btnIngridients = document.querySelector('.block__float-ingridients');
const floatIngridients = document.querySelector('.float-ingridients__list');
const btn__prev = document.querySelector('.btn__prev');
const btn__next = document.querySelector('.btn__next');
const ingridients__btn__close = document.querySelector('.ingridients__btn__close');
// section --Team--
const team__item = document.querySelectorAll('.team__accordeon__item');

// CYCLES
// cycle of --pop up-- menu__link
for (let i = 0; i < menu__link.length; i++) {
  const link = menu__link[i];
  link.addEventListener ('click', function (e) {
    e.preventDefault();
    console.log(link[i]);
    sidebar__mobile.style.display = 'flex';
    transfer__menu.style.display = 'none';
  });
};
// cycle of --close btn-- sections do, burger -- have a bug
// for (let i = 0; i < btn__close.length; i++) {
//   const close = btn__close[i];
//   close.addEventListener ('click', function (e) {
//     sidebar__mobile.style.display = 'flex';
//     transfer__menu.style.display = 'none';
//     floatIngridients.style.left = '-9999px';
//   });
// };
// cycle of --team person--
for (let i = 0; i < team__item.length; i++) {
  const item_team = team__item[i];
  let classItemName = item_team.className;
  
  item_team.addEventListener('click', function (e) {
    e.preventDefault();
    item_team.classList.add('team_accordeon_item_active');
    // item_team.sublings();
    // item_team.classList.remove('team_accordeon_item_active');
    // console.log(classItemName);
  });
};
// independent EVENTS
// --pop up-- Event
sidebar__mobile.addEventListener('click', function (event) {
  event.preventDefault();
  transfer__menu.style.display = 'flex';
});
btn__close.addEventListener('click', function (e) {
    transfer__menu.style.display = 'none';
});
// ingridients Event
btnIngridients.addEventListener('click', function (e) {
  floatIngridients.style.left = '0';
});
ingridients__btn__close.addEventListener('click', function (e) {
  floatIngridients.style.left = '-9999px';
});
// example pop up two --isn't work--
// const sidebar__mobile = document.querySelector('.nav-sidebar__mobile');
// const template = document.querySelector('#overlayTemplate').innerHTML;
// const overlay = createOverlay(template);

// sidebar__mobile.addEventListener('click', function() {
//   overlay.open();

// });

// function createOverlay(template) {
//   let fragment = document.createElement('div');

//   fragment.innerHTML = template;

//   const transfer__menu = fragment.querySelector('.mobile__transfer__menu');
//   const btn__close = fragment.querySelector('.btn__close');

//   fragment = null;

//   btn__close.addEventListener('click', function (e) {
    
//   });

// };

// section --burger--






