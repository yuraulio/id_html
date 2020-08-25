if (document.getElementsByClassName('dev_item').length > 3) {
  $(document).ready(function(){
    $('.dev_items').slick({
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 3
    });
  });
}
