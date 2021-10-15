
(function($) {

    "use strict";
    
    // var cfg = {
    //     scrollDuration : 800, // smoothscroll duration
    //     mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    // },

    // $WIN = $(window);

    // // Add the User Agent to the <html>
    // // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    // var doc = document.documentElement;
    // doc.setAttribute('data-useragent', navigator.userAgent);

    // // svg fallback
    // if (!Modernizr.svg) {
    //     $(".home-logo img").attr("src", "images/logo.png");
    // }


   /* info toggle
    * ------------------------------------------------------ */
    var ssNavToggle = function() {

        $('.nav-toggle').on('click', function(event) {

            event.preventDefault();
            $('.nav-div').toggleClass('nav-is-visible');
            $('body').toggleClass('nav-down');

        });

    };

      /* info toggle with about btn
    * ------------------------------------------------------ */
//    var ssAboutToggle = function() {
//         //open/close lateral navigation
//         $('.about').on('click', function(event) {

//             event.preventDefault();
//             $('body').toggleClass('info-is-visible');

//         });
//    };



   /* slick slider
    * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };


   /* placeholder plugin settings
    * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };



   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        
        
        ssNavToggle();

    })();


})(jQuery);