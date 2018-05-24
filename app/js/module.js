
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
const btn__prev = document.querySelector('.slider_btn_prev');
const btn__next = document.querySelector('.slider_btn_next');
const ingridients__btn__close = document.querySelector('.ingridients__btn__close');





// section --Team--
const team__item = document.querySelectorAll('.team__accordeon__item');
let items = document.querySelector('.team__accordeon__list');

items.addEventListener('click', (e) =>{
  e.preventDefault();
  let target= e.target;

  if (target.className ==='team__accordeon__link'){
    let item = target.closest('.team__accordeon__item');
    if (item.classList.contains('team_accordeon_item_active')) {
      item.classList.toggle('team_accordeon_item_active');
    }
    else{
      team__item.forEach(function(item,index){
      item.classList.remove('team_accordeon_item_active');
      })
      item.classList.add('team_accordeon_item_active');
    }
  }
})
// section --menu--
const menuList = document.querySelector('.menu__accordeon__list');
const menuItem = document.querySelectorAll('.menu__accordeon__item');

menuList.addEventListener('click', (e) => {
  e.preventDefault();
  let target = e.target;

  if (target.className === 'menu__accordeon__link__title') {
    let closestMenuItem = target.closest('.menu__accordeon__item');
    if (closestMenuItem.classList.contains('menu_accordeon_item_active')) {
      closestMenuItem.classList.toggle('menu_accordeon_item_active');
    }
    else {
      menuItem.forEach(function(item,index){
        closestMenuItem.classList.remove('menu_accordeon_item_active');
      });
      closestMenuItem.classList.add('menu_accordeon_item_active');
    }
  };
});
// CYCLES
// cycle of --pop up-- menu__link
for (let i = 0; i < menu__link.length; i++) {
  const link = menu__link[i];
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(link[i]);
    transfer__menu.style.top = '-9999px';
    transfer__menu.style.opacity = '0';
  });
};

// cycle of --team person--
// for (let i = 0; i < team__item.length; i++) {
//   const item_team = team__item[i];

//   item_team.addEventListener('click', (e) => {
//     e.preventDefault();
//     item_team.classList.toggle('team_accordeon_item_active');
//   });
// };
// independent EVENTS
// --pop up-- Event
sidebar__mobile.addEventListener('click', (e) => {
  e.preventDefault();
  transfer__menu.style.top = '0px';
});
btn__close.addEventListener('click', (e) => {
  transfer__menu.style.top = '-9999px';
});
// ingridients Event
btnIngridients.addEventListener('mouseover', (e) => {
  floatIngridients.style.opacity = '1';
  floatIngridients.style.left = '100%';
});
ingridients__btn__close.addEventListener('click', (e) => {
  floatIngridients.style.opacity = '0';
  floatIngridients.style.left = '-9999px';
});


// --Form--

const form = document.querySelector('#form');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', (e) => {
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

// modal reviews 


function createOverlay(name, text) {


  const overlayElement = document.createElement('div');
  overlayElement.classList.add('reviews__overlay');

  const template = document.querySelector('#overlayReviews');
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector('.reviews__overlay-close');
  closeElement.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });
  const contentName = overlayElement.querySelector('.reviews__overlay-content__name');
  contentName.innerHTML = name;

  const contentText = overlayElement.querySelector('.reviews__overlay-content__discription');
  contentText.innerHTML = text;

  return overlayElement;
};

const openBtn = document.querySelectorAll('.review__btn__link');
const getName = document.querySelector('.review__name');
const getText = document.querySelector('.review__text');

var name = getName.innerHTML;
var text = getText.innerHTML;
const succesOverlay = createOverlay(name, text);

for (let i = 0; i < openBtn.length; i++) {
  const evenBtn = openBtn[i];
  evenBtn.addEventListener('click', (e) => {
    // var target = e.target;
    // const getText = target.previousSibling('.review__text');
    var name = getName.innerHTML;
    var text = getText.innerHTML;
    document.body.appendChild(succesOverlay);
  });
};



