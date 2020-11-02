/*
//_header

let menu_button = document.querySelector('.menu__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.menu__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.remove('lock');
};

/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.menu__list').click(function(event) {
        $('.menu__burger,.header__menu').toggleClass('active');
        $('body').removeClass('lock');
    });
});*/