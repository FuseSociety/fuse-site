// loading
$(document).ready(function() {
  setTimeout(function() {
    document.getElementById("loading_container").style.opacity = "0";
    setTimeout(function() {
  
      document.getElementById("loading_container").style.display = "none";
      document.getElementById("container").style.display = "block";
  
      setTimeout(function() {
        document.getElementById("container").style.opacity = "1";
  
        load_background();
  
      }, 700);
  
    }, 500);
  }, 500);
});

// navbar transition
$(function(){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop(); // number of pixels scrolled
    var scrollPoint = window.innerHeight / 5; // navbar changes after this point
    if(scroll > scrollPoint){
      $('.home-navbar').addClass('stick');
      $('.nav-logo img').addClass('stick');
    } else {
      $('.home-navbar').removeClass('stick');
      $('.nav-logo img').removeClass('stick');
    }
  });
});

var package = false;

function showHiringPackage() {
  package = true;
  $('.hiring-package').css('visibility', 'visible');
  $('.hiring-package').css('opacity', '1');
  $('.hiring-package iframe').css('transform', 'translateY(0)');
}

function hideHiringPackage() {
  $('.hiring-package').css('opacity', '0');
  $('.hiring-package iframe').css('transform', 'translateY(100%)');
  setTimeout(function() {
    $('.hiring-package').css('visibility', 'hidden');
    package = false;
  }, 650);
}

$(document).keyup(function(event) {
  if (event.keyCode === 27 && package) {
    hideHiringPackage(); // esc key
  }
});

