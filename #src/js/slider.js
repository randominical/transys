$(document).ready(function(){
    $('.slider').slick({
      autoplay: false,
      draggable: true,
      arrows: false,
      dots: false,
      slidesToShow: 3,
      infinite: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
});