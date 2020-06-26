(function($) {
    "use strict";

     /*-- Scroll menu --*/
     $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#menu_area').addClass('menu-bg');
        } else {
            $('#menu_area').removeClass('menu-bg');
        }
    });


})(jQuery);