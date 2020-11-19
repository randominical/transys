$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu__body, .body-menu__logo, .body-menu__bottom').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.body-menu__list, .body-menu__logo').click(function(event) {
        $('.menu__burger, .menu__body, .body-menu__logo, .body-menu__bottom').removeClass('active');
        $('body').removeClass('lock');
    });
});