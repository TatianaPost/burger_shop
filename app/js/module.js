console.log('Привет мир');
// Burger Carousel
$(document).ready(function () {
  $('.next').click(function() {
    var currentImage = $('.burger__carousel.current');
    var currentImageIndex  = $('.burger__carousel.current').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.burger__carousel').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('current');

    if (nextImageIndex == ($('.burger__carousel:last').index()+1)){
      $('.burger__carousel').eq(0).fadeIn(1000);
      $('.burger__carousel').eq(0).addClass('current');
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('current');

    };
  });

});