//https://kenwheeler.github.io/slick/
//после подключения jquery
$(document).ready(function(){
    $('.slider').slick({
      autoplay: false,
      draggable: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      responsive:[
        {
            breakpoint:1800,
            settings: {
                slidesToShow:2,
            }
        },
        {
          breakpoint:1199,
            settings: {
                slidesToShow:1,
            }
        }
    ]
  });
});