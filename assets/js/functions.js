$(function(){

  new WOW().init();

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  if($(window).width() <= 752) {
    $('.navbar').addClass('scrollNav');
  }

  $(window).resize(function() {
    if($(window).width() <= 752) {
      $('.navbar').addClass('scrollNav');
    } else {
      $('.navbar').removeClass('scrollNav');
    }
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if($(window).width() > 752) {
      if(wScroll >= 1) {
        $('.navbar').addClass('scrollNav');
      } else {
        $('.navbar').removeClass('scrollNav');
      }
    }

  });

});
