
// VARIABLES
// adjustment
const btn__close = document.querySelector('.btn__close'); // using in --pop up--, --  --
// section --do--
// --pop up--
const sidebar__mobile = document.querySelector('.nav-sidebar__mobile');
const transfer__menu = document.querySelector('.mobile__transfer__menu');
const menu__link = document.querySelectorAll('.transfer_item_link');

sidebar__mobile.addEventListener('click', (e) => {
  e.preventDefault();
  transfer__menu.style.top = '0px';
});
btn__close.addEventListener('click', (e) => {
  transfer__menu.style.top = '-9999px';
});
menu__link.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    transfer__menu.style.top = '-9999px';
  });
});

// burger --slider--
$(function () {

  var coloringDots = function(index) {
    $('.burger-slider')
      .find('.bottom__dots-item')
      .eq(index)
      .addClass('active_dot')
      .siblings()
      .removeClass('active_dot');
  };

  var generateDots = function () {
    $('.burger__carousel').each(function(){
      var dot = $('<li>', {
        attr : {
          class : 'bottom__dots-item'
        },
        html : '<div class="bottom__dots-item__circle"></div>'
      });
      $('.bottom__dots-list').append(dot);
    });
  };

  generateDots();

  var moveSlide = function (container, slideNum) {
    var 
      items = container.find('.burger__carousel'),
      activeSlide = items.filter('.burger_is-active')
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      list = container.find('.burger__carousel-list'),
      duration = 500;

    if (reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, function () {
        activeSlide.removeClass('burger_is-active');
        reqItem.addClass('burger_is-active');
        coloringDots(slideNum);
      });
    };
  };


  $('.slider__btn').on('click', function (e) {
    e.preventDefault();

        var $this = $(this),
            container = $this.closest('.burger-slider'),
            items = $('.burger__carousel', container),
            activeItem = items.filter('.burger_is-active'),
            existedItem, edgeItem, reqItem;

    if ($this.hasClass('slider_btn_next')) {// вперед
      existedItem = activeItem.next();
      edgeItem = items.first();
    }
    if ($this.hasClass('slider_btn_prev')) { //назад
      existedItem = activeItem.prev();
      edgeItem = items.last();  
    }
    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
    
    moveSlide(container, reqItem);

  });

  $('body').on('click', '.bottom__dots-item', function(){
    var $this = $(this),
      container = $this.closest('.burger-slider'),
      index = $this.index();
    moveSlide(container, index);
    coloringDots(index);
  });

});

// burger --ingridients--
const btnIngridients = document.querySelector('.block__float-ingridients');
const floatIngridients = document.querySelector('.float-ingridients__list');
const burger__container = document.querySelector('.burger-container');

btnIngridients.addEventListener('mousemove', (e) => {
  floatIngridients.style.opacity = '1';
  floatIngridients.style.left = '100%';
});
burger__container.addEventListener('mouseover', (e) => {
  floatIngridients.style.opacity = '0';
  floatIngridients.style.left = '-9999px';
});

// section --Team--
const team__item = document.querySelectorAll('.team__accordeon__item');
const items = document.querySelector('.team__accordeon__list');
const team__section = document.querySelector('.team');

items.addEventListener('click', (e) => {
  e.preventDefault();
  let target = e.target;

  if (target.className === 'team__accordeon__link') {
    let item = target.closest('.team__accordeon__item');
    if (item.classList.contains('team_accordeon_item_active')) {
      item.classList.toggle('team_accordeon_item_active');
    }
    else {
      team__item.forEach(function (item, index) {
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
      menuItem.forEach(function (closestMenuItem, index) {
        closestMenuItem.classList.remove('menu_accordeon_item_active');
      });
      closestMenuItem.classList.add('menu_accordeon_item_active');
    }
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

openBtn.forEach(evenBtn => {
  evenBtn.addEventListener('click', (e) => {
    // var target = e.target;
    // const getText = target.previousSibling('.review__text');
    var name = getName.innerHTML;
    var text = getText.innerHTML;
    document.body.appendChild(succesOverlay);
  });
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

// var array = [1,2,3,4,5,6,7,8,9,10];

// var squared = array.map(num => num * num);
// console.log(squared);
// --one page scroll--

// const sections = $('.section');
// const display = $('.maincontent');

// const performTransition = sectionEq() => {
//   const position = `$(-sectionEq * 100)%`;

//   display.css({
//     transform: `translateY(${position})`,
//     '-web-kit-transform': `translateY(${position})`
//   });
// }

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
  $('.nav-sidebar__item')
  .eq(itemEq)
  .addClass('nav-sidebar_item_is-active')
  .siblings()
  .removeClass('nav-sidebar_item_is-active');
};

const performTransition = sectionEq => {
    const position = `${-sectionEq * 100}%`;

  if (inScroll) return;

  inScroll = true;

  sections
    .eq(sectionEq)
    .addClass('is-active')
    .siblings()
    .removeClass('is-active');
  display.css({
    transform: `translateY(${position})`,
    '-webkit-transform': `translateY(${position})`
  });
  const transitionDuration = parseInt(display.css('transition-duration')) * 1000; // time in ms
  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, transitionDuration + 300); // pf 300 мс проходит инерция мышки
};

const scrollToSection = direction => {
  const activeSection = sections.filter('.is-active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'up' && prevSection.length) {
    performTransition(prevSection.index());
  }
  if (direction === 'down' && nextSection.length) {
    performTransition(nextSection.index());
  }
};


$(document).on({
  wheel : (e) => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0
    ? 'down'
    : 'up'

      scrollToSection(direction);

  },
  keydown: e => {
    switch (e.keyCode) {
      case 40 :
        scrollToSection('down');
        break;
      case 38 :
        scrollToSection('up');
        break;
        
        break;
    
      default:
        break;
    }
  },
  touchmove: e => e.preventDefault()
});

$('[data-scroll-to]').on('click', (e) => {
  e.preventDefault();
  
  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
  performTransition(target);
  
});

if (isMobile) {
  $(document).swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      const swipeDirection = direction === 'down' ? 'up' : 'down';
      scrollToSection(swipeDirection);
    }
  });
};








