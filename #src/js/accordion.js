$(document).ready(function() {
    $('.accordion__title').click(function(event) {
        if($('div').hasClass('accordion')){
            $('.accordion__title').not($(this)).removeClass('active');
            $('.accordion__content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});