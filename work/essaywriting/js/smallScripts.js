
//Open mobile nav
$(function() {
	$('.nav-toggler').on('click', function(){
		$('.main-nav').toggleClass('main-nav--open');
		$('body').toggleClass('no-overflow-nav');
	});
});

// Close top offer
$(function() {
	$('.top-offer__close').on('click', function(){
		$('.top-offer').css({display: 'none'});
	});
});

//Select arrow rotate
// $(function() {
// 	$('.select-style').on('click', function(){
// 		$(this).toggleClass('select-style--rotate');
// 	});
// });
// $(document).click(function (event) {
// 	event.stopPropagation();
// 	var container = $(".select-style");
// 	//check if the clicked area is dropDown or not
// 	if (container.has(event.target).length === 0) {
// 		container.removeClass('select-style--rotate');
// 	}
// })
// $(window).scroll(function() {
// 	$(".select-style").removeClass('select-style--rotate');
// });


//fixed nav on scroll
var navSpace = $('.menu-header').height();
var fixTop = $('.menu-header').offset().top;
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixTop) {
		$('.menu-header').addClass('fixed');
		$('body').css({ paddingTop: navSpace});
	} else {
		$('.menu-header').removeClass('fixed');
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
var fixBottom = $('.order-footer');
var footerSpace = $('.order-footer').height();
if (fixBottom.length) {
	var offset = fixBottom.offset().top;
}
$(window).scroll(function() {
	var crntScroll = $(window).scrollTop();
	if (crntScroll <= ($(this).scrollTop() > 100)) {
		$(fixBottom).css({
			"position": "relative",
			"animation": "none"
		});
		$('body').css({ "paddingBottom": "0"});
	} else {
		$(fixBottom).css({
			"position": "fixed",
			"left": "0",
			"right": "0",
			"bottom": "0",
			"animation": "foot-anim ease .4s",
			"animation-fill-mode": "forwards"
		});
		$('body').css({ paddingBottom: footerSpace});
	}
});

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

//Home pargin-bottom depend of height Important text section
var mainText = $('.home__smth').height();
$('.home').css({ paddingBottom: mainText });

//Read more link in important text
$(document).ready(function(){
	$('.smth-more').on('click',function(){
		if($('.home__smth-text').attr('data-click-state') == 1) {
			$('.home__smth-text').attr('data-click-state', 0)
			$('.home__smth-text').removeClass('text-height')
			$('.home').css({ paddingBottom: $('.home__smth').height() })
			$(".smth-more").html('Read completely')
			// if ($(window).width() <= 480) {
			// 	$('.home').css({ paddingBottom: $('.imp-text').height() })
			// }
		} else {
			$('.home__smth-text').attr('data-click-state', 1)
			$('.home__smth-text').addClass('text-height')
			$('.home').css({ paddingBottom: $('.home__smth').height() })
			$(".smth-more").html('Hide')
			// if ($(window).width() <= 480) {
			// 	$('.home').css({ paddingBottom: $('.imp-text').height() + 26 })
			// }
		}
	});
 });

//Modal
$(document).on('ready', function(){
	$modal = $('.modal-frame');
	$overlay = $('.modal-overlay');
	$fixBody = $('body');

	/* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
	$modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
		if($modal.hasClass('state-leave')) {
			$modal.removeClass('state-leave');
		}
	});

	$('.close').on('click', function(){
		$overlay.removeClass('state-show');
		$modal.removeClass('state-appear').addClass('state-leave');
		$fixBody.removeClass('no-overflow');

	});

	$('.open').on('click', function(){
		$overlay.addClass('state-show');
		$modal.removeClass('state-leave').addClass('state-appear');
		$fixBody.addClass('no-overflow');
	});
});

//
if ($(window).width() <= 700) {
	(function($) {
		var hideText = $('.home__why-text p').hide();
		$('.home__why-text p').first().slideDown().prev().css({textDecoration: 'none'});
		$('.home__why-text h3').on('click', function() {
			hideText.slideUp().prev().css({textDecoration: 'underline'});
			$(this).next().slideDown().prev().css({textDecoration: 'none'});
			return false;
		});
	})(jQuery);
}
