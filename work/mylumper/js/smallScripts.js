// Fix header on scroll
var fixHeader = $('.js-header').offset().top + $('header').outerHeight();
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixHeader) {
		$('.js-header').addClass('page-header--fixed');
	} else {
		$('.js-header').removeClass('page-header--fixed');
	}
});

// Smooth scroll
$(document).on('click', 'a.smooth-scroll[href^="#"]', function(e) {
	var id = $(this).attr('href');
	var $id = $(id);
	if ($id.length === 0) { return; }
	e.preventDefault();
	var pos = $(id).offset().top - 102;
	$('body, html').animate({scrollTop: pos});
});

// Open mobile nav
$(function() {
	$('.main-menu-open, .main-menu-close, .js-menu-darkness').on('click', function(){
		$('.page-header__menu').toggleClass('page-header__menu--open');
		$('.js-menu-darkness').toggleClass('darkness--show');
		$('body').toggleClass('no-scroll-nav');
	});
});

// Modal login
$(function() {
	$('.js-login-toggle, .js-darkness').on('click', function(){
		$('.js-darkness').toggleClass('darkness--show');
		$('.login-modal').toggleClass('login-modal--show');
		$('body').toggleClass('no-scroll-modal');

		$('#login-form').slideDown(200);
		$('#forgot-form').slideUp(200);
		$('.js-login-title').slideDown(200);
		$('.js-forgot-title').slideUp(200);
	});
});

// Forgot pass
$(function() {
	$('#forgot-form').hide();
	$('.js-forgot-title').hide();

	$('.js-forgot').on('click', function(){
		$('#login-form').slideUp(200);
		$('#forgot-form').slideDown(200);
		$('.js-login-title').slideUp(200);
		$('.js-forgot-title').slideDown(200);
	});
});

// Start video
$('.js-video-cap').click(function(ev){
	$('.js-video-cap').hide();
	$(".js-lumper-video")[0].src += "&autoplay=1";
	ev.preventDefault();
});

// Form label
var form;
form = function() {
	return $('.input-cover input, .input-cover textarea').focus(function() {
		return $(this).closest('.input-cover').addClass('focused has-value');
	}).focusout(function() {
		return $(this).closest('.input-cover').removeClass('focused');
	}).blur(function() {
		if (!this.value) {
			$(this).closest('.input-cover').removeClass('has-value');
		}
		return $(this).closest('.input-cover').removeClass('focused');
	});
};
$(function() {
	return form();
});

// Faq accordion
$(function() {
	$('.js-acc-item').each(function() {
		var $accordion = $(this);

		$(".js-acc-question", $accordion).click(function(e) {
			e.preventDefault();
			$div = $(".js-acc-answer", $accordion);
			$div.slideToggle(200);
			$(".js-acc-answer").not($div).slideUp(200).parent().removeClass('accordion__item--active');
			$div.parent(".js-acc-item").toggleClass('accordion__item--active').siblings().removeClass('accordion__item--active');
			return false;
		});

		$(".js-acc-answer").first().show();
	});
});

// Tabs
$(document).ready(function(){
	$(".js-tabs-item").click(function(e){
		if (!$(this).hasClass("tabs__item--active")) {
			var tabNum = $(this).index();
			var nthChild = tabNum + 1;
			$(".js-tabs-item.tabs__item--active").removeClass("tabs__item--active");
			$(this).addClass("tabs__item--active");

			$(".js-tab-item.tab__item--active").removeClass("tab__item--active");
			$(".js-tab-item:nth-child("+nthChild+")").addClass("tab__item--active");
		}
	});
});

// Active nav
$(function() {
	var nav = document.getElementById("js-main-menu"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "current-menu-item";
		}
	}
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
		$body.removeClass('no-scroll-modal');
	});

	$('.js-popup-open').on('click', function(){
		$overlay.addClass('state-show');
		$modal.removeClass('state-leave').addClass('state-appear');
		$body.addClass('no-scroll-modal');
	});
});

//Parallax
jQuery(document).ready(function(){
	$(window).scroll(function(e){
		parallaxScroll();
	});
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		//$('.js-parallax').css({'background-position-y': + (0+(scrolled*.25)) + 'px'});
		$('.js-lid-text').css({'opacity': + (1-(scrolled*0.004))});
	}
});
