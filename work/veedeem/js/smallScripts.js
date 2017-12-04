
//Open mobile nav
$(function() {
	$('.nav-header__toggler').on('click', function(){
		$('header').toggleClass('nav-open');
		$('body').toggleClass('no-overflow-nav');
	});
});

//Modal opener
$(function() {
	$('.gaq-modal-toggler, .gaq-modal-fogging').on('click', function(){
		$('.gaq-modal').toggleClass('gap-modal--open');
		$('.gaq-modal-fogging').toggleClass('gaq-modal-fogging--open');
		$('body').toggleClass('no-overflow-modal');
	});
});

// Show all steps
$(function() {
	$('.home-cont__hiw span.butn.butn-white').on('click', function(){
		$('.home-cont__hiw ul li').css({'display':'flex'});
		$('.home-cont__hiw span.butn.butn-white').css({'display':'none'});
	});
});

//Accordion
$(function() {
    $('.faq-cont__item').each(function() {
        var $accordion = $(this);

        $(".faq-cont__question", $accordion).click(function(e) {
            e.preventDefault();
            $div = $(".faq-cont__answer", $accordion);
            $div.slideToggle(200);
            $(".faq-cont__answer").not($div).slideUp(200);
            $div.parent(".faq-cont__item").toggleClass('faq-cont__item--active').siblings().removeClass('faq-cont__item--active');
            return false;
        });

        $(".faq-cont__answer").first().show();
    });
});

//colored nav on scroll
jQuery(document).ready(function(){
	$(window).scroll(function(e){
		borderShow();
	});
	function borderShow(){
		var scrolled = $(window).scrollTop();
		if(scrolled >= $('main').offset().top + 100) {
			$('header').addClass('header--scrolled');
		} else {
			$('header').removeClass('header--scrolled');
		}
	}
});

//Smooth scroll
$(function() {
	$('a.arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 76}, 500, 'linear');
	});
});

//Active nav
$(function() {
	var nav = document.getElementById("nav-header"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "active";
		}
	}
});

//Advantages mobile
if ($(window).width() <= 700) {
	(function($) {
		var hideText = $('.home-cont__advan ul li p').hide();
		$('.home-cont__advan ul li p').first().show();
		$('.home-cont__advan ul li h3').click(function() {
			hideText.slideUp();
			$(this).next().slideDown();
			return false;
		});
	})(jQuery);
}
