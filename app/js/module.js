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
    transfer__menu.style.top = '-9999px';
    transfer__menu.style.opacity = '0';
  });
};

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
  transfer__menu.style.right = '0px';
});
btn__close.addEventListener('click', function (e) {
  transfer__menu.style.right = '-9999px';
});
// ingridients Event
btnIngridients.addEventListener('click', function (e) {
  floatIngridients.style.opacity = '1';
  // floatIngridients.style.left = '100%';
});
ingridients__btn__close.addEventListener('click', function (e) {
  // debugger;
  floatIngridients.style.opacity = '0';
  // floatIngridients.style.left = '-9999px';
});


// --Form--

const form = document.querySelector('#form');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function (e) {
  e.preventDefault();
  var objFormNameText = [form.elements.name, form.elements.phone, form.elements.street,
    form.elements.house, form.elements.houseEntr, form.elements.entrance, form.elements.floor, 
    form.elements.apartment];
  if (objFormNameText[0]) {
    console.log(form.elements.name.value);
  }
  if (objFormNameText[1]) {
    console.log(form.elements.phone.value);
  }
  if (objFormNameText[2]) {
    console.log(form.elements.street.value);
  }
  if (objFormNameText[3]) {
    console.log(form.elements.house.value);
  }
  if (objFormNameText[4]) {
    console.log(form.elements.houseEntr.value);
  }
  if (objFormNameText[5]) {
    console.log(form.elements.entrance.value);
  }
  if (objFormNameText[6]) {
    console.log(form.elements.floor.value);
  }
  if (objFormNameText[7]) {
    console.log(form.elements.apartment.value);
  }
});






