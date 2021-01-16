$(function() {
	setTimeout(function(){
		$('.start-image').fadeIn(1600);
	},500); 
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); 
});

jQuery('a[href^="#"]').click(function() {
  let speed = 800;
  let id = jQuery(this).attr("href");
  let target = ("#" == id ? "html" : id);
  let position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position - $('#js-header').outerHeight()
    },
    speed
    );
    return false;
});

$(function(){
	$(window).scroll(function (){
		$('.fadeIn').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});





$(document).ready(function() {
  $('topBtn').hide();
  $(window).on("scroll", function() {
    if($(this).scrollTop() > 150) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#topBtn").css({
        "position": "absolute",
      });
    } else {
      $("#topBtn").css ({
        "position": "fixed",
      });
    }
  });

  $('#topBtn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});

