$(document).ready(function() {
  $('.dev_items').slick({
    rows: 0,
    dots: true,
    // infinite: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }

      }, {

      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }

    }, {

    breakpoint: 1220,
    settings: {
      slidesToShow: 3,
    }

  }]
  });
});
