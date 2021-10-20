(function($) {

    "use strict";

    var contactBtn = function() {
        $('.contact-nav').on('click', function(event) {
            event.preventDefault();
            $('.contact-div').addClass('div-is-visible');
            $('.contact-overlay').addClass('div-is-visible');   
            $('.nav-div').toggleClass('nav-is-visible');
            $('body').toggleClass('nav-down');

            console.log('pressed')
        });
    };

    var closeBtn = function() {
        $('.btn-close').on('click', function(event) {
            event.preventDefault();
            $('.contact-div').removeClass('div-is-visible');
            $('.contact-overlay').removeClass('div-is-visible');
        });
    };

    /* initialize
    * ------------------------------------------------------ */
   (function ssInit() {       
        contactBtn();
        closeBtn();

    })();

})(jQuery);

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "Sent successfully!";
      status.classList.add("success")
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add("error")
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }