// Слайдер блоку mentors
$(document).ready(function(){
  $('.mentors_items').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000
  });
});
