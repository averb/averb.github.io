//Open mobile nav
$(function() {
	$('.nav-toggler').on('click', function(){
		$('.main-nav').toggleClass('main-nav--open');
		$('.nav-toggler').toggleClass('nav-toggler--open');
		$('body').toggleClass('no-scroll-nav');
	});
});

//fixed nav on scroll
var navSpace = $('.page-header__top').height();
var fixTop = $('.page-header__top').offset().top + 1;
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixTop) {
		$('.page-header__top').addClass('page-header__top--fixed');
		$('body').css({ paddingTop: navSpace});
	} else {
		$('.page-header__top').removeClass('page-header__top--fixed');
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

// Accordion
$(function() {
    $('.js-accord-item').each(function() {
        var $accordion = $(this);

        $(".js-accord-question", $accordion).click(function(e) {
            e.preventDefault();
            $div = $(".js-accord-answer", $accordion);
            $div.slideToggle(200);
            $(".js-accord-answer").not($div).slideUp(200).parent().removeClass('js-accord-item--active');
            $div.parent(".js-accord-item").toggleClass('js-accord-item--active').siblings().removeClass('js-accord-item--active');
			//$("html,body").animate({scrollTop: $('.js-accord-item--active').offset().top -  $("html,body").offset().top, scrollLeft: 0},300);
			return false;
        });

        $(".accord__answer").first().show();
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
