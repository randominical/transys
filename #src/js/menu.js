$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu__body, .body-menu__logo, .body-menu__bottom').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.body-menu__link, .body-menu__logo').click(function(event) {
        $('body').removeClass('lock');
        $('.menu__burger, .menu__body, .body-menu__logo, .body-menu__bottom').removeClass('active');
    });
});