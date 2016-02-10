$(function(){

  new WOW().init();

  // if(top.location.pathname === '/') {
  if(top.location.pathname === '/nQuanta/' || top.location.pathname === '/nQuanta/index.html') {
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
  }

  // if(top.location.pathname !== '/') {
  if(top.location.pathname === '/nQuanta4/faq.html' || top.location.pathname === '/nQuanta4/privacy.html' || top.location.pathname === '/nQuanta4/terms.html') {
    $('.navbar').addClass('scrollNav');
  }

  if($(window).width() <= 752) {
    $('.navbar').addClass('scrollNav');
  }

  $(window).resize(function() {
    // if(top.location.pathname === '/') {
    if(top.location.pathname === '/nQuanta/' || top.location.pathname === '/nQuanta/index.html') {
      if($(window).width() <= 752) {
        $('.navbar').addClass('scrollNav');
      } else {
        $('.navbar').removeClass('scrollNav');
      }
    }
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // if($(window).width() > 752 && top.location.pathname === '/') {
    if($(window).width() > 752 && top.location.pathname === '/nQuanta/' || top.location.pathname === '/nQuanta/index.html') {
      if(wScroll >= 1) {
        $('.navbar').addClass('scrollNav');
      } else {
        $('.navbar').removeClass('scrollNav');
      }
    }

  });

  $('.panel-heading .panel-title a').click(function(){

    if($(this).parent().parent().parents('.panel').hasClass('panel-primary')) {
      $(this).parent().parent().parents('.panel').removeClass('panel-primary');
    } else {
      $('.panel').removeClass('panel-primary');
      $(this).parents('.panel').addClass('panel-primary');
    }

  });

});
