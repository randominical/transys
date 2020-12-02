(function() {
    'use strict';
  
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
        BtnUp.classList.add('active');
        }
        if (scrolled < coords) {
        BtnUp.classList.remove('active');
        }
    }
    
    var BtnUp = document.querySelector('.up');
    window.addEventListener('scroll', trackScroll);
})();