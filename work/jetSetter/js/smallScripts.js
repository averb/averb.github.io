// For body bg
$('body').addClass('tsum');

// Search animation toggler
$(function() {
	$('.js-search-toggler').on('click', function(){
		$('.search').toggleClass('search--show');
	});
});

// Barger menu toggler
$(function() {
	$('.barger-menu-toggler').on('click', function(){
		$('.header__top-start').toggleClass('header__top-start--show');
	});
});

// Main menu toggler
$(function() {
	$('.main-menu-toggler').on('click', function(){
		$('.main-menu').toggleClass('main-menu--show');
	});
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

// Sign modal toggeler
$(function() {
	$('.js-sign-modal-toggler').on('click', function(){
		$('.sign-modal').toggleClass('sign-modal--show');
		$('.sign-modal-darkness').toggleClass('sign-modal-darkness--show');
	});
});

// img hidden text
$(function() {
	$('.js-img-desc').each(function() {
		var $ryt = $(this).children('.image-fill__text')
		$(this).css('bottom', - $ryt.outerHeight() - 10)
	})
})
