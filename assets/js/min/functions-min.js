$(function(){(new WOW).init(),("/nQuanta/"===top.location.pathname||"/nQuanta/index.html"===top.location.pathname)&&$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),("/nQuanta4/faq.html"===top.location.pathname||"/nQuanta4/privacy.html"===top.location.pathname||"/nQuanta4/terms.html"===top.location.pathname)&&$(".navbar").addClass("scrollNav"),$(window).width()<=752&&$(".navbar").addClass("scrollNav"),$(window).resize(function(){("/nQuanta/"===top.location.pathname||"/nQuanta/index.html"===top.location.pathname)&&($(window).width()<=752?$(".navbar").addClass("scrollNav"):$(".navbar").removeClass("scrollNav"))}),$(window).scroll(function(){var a=$(this).scrollTop();$(window).width()>752&&("/nQuanta/"===top.location.pathname||"/nQuanta/index.html"===top.location.pathname)&&(a>=1?$(".navbar").addClass("scrollNav"):$(".navbar").removeClass("scrollNav"))}),$(".panel-heading .panel-title a").click(function(){$(this).parent().parent().parents(".panel").hasClass("panel-primary")?$(this).parent().parent().parents(".panel").removeClass("panel-primary"):($(".panel").removeClass("panel-primary"),$(this).parents(".panel").addClass("panel-primary"))})});