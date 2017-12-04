// Close top offer
$(function() {
	$('.top-offer__close').on('click', function(){
		$('.top-offer').css('display', 'none');
	});
});

//Open mobile nav
$(function() {
	$('.js-nav-toggler').on('click', function(){
		$('.main-nav').toggleClass('main-nav--open');
		$('.main-nav-darkening').toggleClass('main-nav-darkening--open');
		$('body').toggleClass('no-scroll-nav');
	});
});

//fixed nav on scroll
var fixTop = $('header').offset().top + 1;
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixTop) {
		$('header').addClass('page-header--fixed');
		$('body').css({ paddingTop: $('header').height()});
	} else {
		$('header').removeClass('page-header--fixed');
		$('body').css({ paddingTop: '0' });
	}
});

//Retina ready X2
$(function () {

	if (window.devicePixelRatio == 2) {

		var images = $("img.retina");

		for(var i = 0; i < images.length; i++) {

			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@2x" + imageType;

			images[i].src = imageName;
		}
	}
});

//Retina ready X3
$(function () {

	if (window.devicePixelRatio == 3) {

		var images = $("img.retina");

		for(var i = 0; i < images.length; i++) {

			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@3x" + imageType;

			images[i].src = imageName;
		}
	}
});

//Fix footer in order page
// var fixBottom = $('.footer-order');
// var footerSpace = $('.footer-order').height();
// if (fixBottom.length) {
// 	var offset = fixBottom.offset().top;
// }
// $(window).scroll(function() {
// 	var crntScroll = $(window).scrollTop();
// 	if (crntScroll <= ($(this).scrollTop() > 100)) {
// 		$(fixBottom).removeClass('fixed-footer');
// 		$('body').css({ paddingBottom: '0'});
// 	} else {
// 		$(fixBottom).addClass('fixed-footer');
// 		$('body').css({ paddingBottom: footerSpace});
// 	}
// });

//Active nav
$(function() {
	var nav = document.getElementById("main-nav"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "active";
		}
	}
});

// Material button, ripple-effect
(function($) {
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    })
})(jQuery);

// sidebar slider
$(document).ready(function(){
	$('.sidebar-slider').bxSlider({
		slideWidth: 350,
		slideMargin: 0,
		minSlides: 1,
		maxSlides: 1,
		auto: true,
		pause: 6000
	});
});

// Accordion
$(function() {
    $('.accordion__item').each(function() {
        var $accordion = $(this);

        $(".accordion__question", $accordion).click(function(e) {
            e.preventDefault();
            $div = $(".accordion__answer", $accordion);
            $div.slideToggle(200);
            $(".accordion__answer").not($div).slideUp(200);
            $div.parent(".accordion__item").toggleClass('accordion__item--active').siblings().removeClass('accordion__item--active');
            return false;
        });

        $(".accordion__answer").first().show();
    });
});

// Phone popup
$(function() {
    $modal = $('.popup-frame');
    $overlay = $('.popup-phones');
    $body = $('body');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
        if($modal.hasClass('state-leave')) {
            $modal.removeClass('state-leave');
        }
    });

    $('.js-popup-close').on('click', function(){
        $overlay.removeClass('state-show');
        $modal.removeClass('state-appear').addClass('state-leave');
        $body.removeClass('no-scroll-popup');
    });

    $('.js-popup-open').on('click', function(){
        $overlay.addClass('state-show');
        $modal.removeClass('state-leave').addClass('state-appear');
        $body.addClass('no-scroll-popup');
    });
});

// Home features mobile
if($(window).width() <= 760) {
    $('.js-feature').each(function() {
        var $dropdown = $(this);

        $(".js-feature-title", $dropdown).click(function(e) {
            e.preventDefault();
            $div = $(".js-feature-text", $dropdown);
            $div.slideToggle(200);
            $(".js-feature-text").not($div).slideUp(200);
            $div.parent(".js-feature").toggleClass('js-feature--active').siblings().removeClass('js-feature--active');
            return false;
        });

        $(".js-feature-text").first().show();
    });
} else {}

// Home hiw mobile
if($(window).width() <= 760) {
    $('.js-hiw-item').each(function() {
        var $dropdown = $(this);
		$dropdown.css("paddingBottom",  $(".js-hiw-text").height() + 44)
        $(".js-hiw-number", $dropdown).click(function(e) {
            e.preventDefault();
            $div = $(".js-hiw-text", $dropdown);
			$div.parent().css("paddingBottom", $div.height() + 44);
            $div.slideDown(200);
            $(".js-hiw-text").not($div).slideUp(200).parent().css("paddingBottom", "0");
            $div.parent(".js-hiw-item").addClass('js-hiw-item--active');
			$div.parent(".js-hiw-item").siblings().removeClass('js-hiw-item--active');
			return false;
        });

        $(".js-hiw-text").first().show();
    });
}

//$(".home-hiw__list").css("paddingBottom", $(".js-hiw-text").outerHeight() + 50);
