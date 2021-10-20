
(function($) {

    "use strict";

   /* Nav toggle
    * ------------------------------------------------------ */
    var ssNavToggle = function() {

        $('.nav-toggle').on('click', function(event) {

            event.preventDefault();
            $('.nav-div').toggleClass('nav-is-visible');
            $('body').toggleClass('nav-down');
        });

    };

   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        ssNavToggle();
    })();


})(jQuery);