// Open mobile nav
$(function() {
	$('.js-nav-toggler').on('click', function(){
		$('.attic__info').toggleClass('attic__info--open');
		$('body').toggleClass('no-overflow-nav');
	});
});

// FAQ image garlic
$(function() {
	$('.faq-page__bottom-garlic img').on('click', function(){
		$('.faq-page__bottom-secret').toggleClass('faq-page__bottom-secret--show');
	});
});

// Retina ready X2
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

// Retina ready X3
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

// Accordion
$(function() {
    $('.faq-page__item').each(function() {
        var $accordion = $(this);
        $(".faq-page__question", $accordion).click(function(e) {
            e.preventDefault();
            $div = $(".faq-page__answer", $accordion);
            $div.slideToggle(200);
            $(".faq-page__answer").not($div).slideUp(200);
            $div.parent(".faq-page__item").toggleClass('faq-page__item--active').siblings().removeClass('faq-page__item--active');
            return false;
        });
        $(".faq-page__answer").first().show();
    });
});

// Tabs
$(document).ready(function(){
    $(".js-tabs li").click(function(e){
        if (!$(this).hasClass("js-tabs--active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $(".js-tabs li.js-tabs--active").removeClass("js-tabs--active");
            $(this).addClass("js-tabs--active");
            $(".js-tab li.js-tab--active").removeClass("js-tab--active");
            $(".js-tab li:nth-child("+nthChild+")").addClass("js-tab--active");
        }
    });
});

// Modal opener
$(function() {
	$('.js-popup-toggler, .js-popup-close, .js-popup-close-bg').on('click', function(){
		$('.login-popup-cover').toggleClass('login-popup-cover--open');
		$('body').toggleClass('no-overflow-modal');
	});
});

// Open popup section
$(function() {
	$('.js-sign-in').on('click', function(){
		$('.login-form__tabs li:first-child').addClass('js-tabs--active');
		$('.login-form__tabs li:last-child').removeClass('js-tabs--active')
		$('.login-form__tab li:first-child').addClass('js-tab--active');
		$('.login-form__tab li:last-child').removeClass('js-tab--active');

	});
	$('.js-regist').on('click', function(){
		$('.login-form__tabs li:last-child').addClass('js-tabs--active');
		$('.login-form__tabs li:first-child').removeClass('js-tabs--active');
		$('.login-form__tab li:last-child').addClass('js-tab--active');
		$('.login-form__tab li:first-child').removeClass('js-tab--active');
	});
});
