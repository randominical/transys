$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.menu__list').click(function(event) {
        $('.menu__burger, .menu__body').removeClass('active');
        $('body').removeClass('lock');
    });
});