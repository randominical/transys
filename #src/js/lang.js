(function($) {
    $(function() {
      $("ul.header__lang").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
      });
    });
  })(jQuery);