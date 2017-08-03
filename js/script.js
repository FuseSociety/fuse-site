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

