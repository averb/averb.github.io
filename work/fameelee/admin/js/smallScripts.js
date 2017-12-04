// Modals
$(function() {
	// Premium one
	$('.toggle-premium-popup-one, .popup-darkening-premium-one').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window__premium-one').toggleClass('popup-window__premium-one--show');
		$('.popup-darkening-premium-one').toggleClass('popup-darkening-premium-one--show');
	});
	// Premium two
	$('.toggle-premium-popup-two, .popup-darkening-premium-two').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window__premium-two').toggleClass('popup-window__premium-two--show');
		$('.popup-darkening-premium-two').toggleClass('popup-darkening-premium-two--show');
	});
	// Premium three
	$('.toggle-premium-popup-three, .popup-darkening-premium-three').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window__premium-three').toggleClass('popup-window__premium-three--show');
		$('.popup-darkening-premium-three').toggleClass('popup-darkening-premium-three--show');
	});
	// Leave Circle
	$('.toggle-leave-circle-popup, .popup-darkening--leave-circle').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--leave-circle').toggleClass('popup-window--leave-circle-show');
		$('.popup-darkening--leave-circle').toggleClass('popup-darkening--leave-circle-show');
	});
	// Remove Place
	$('.toggle-remove-place-popup, .popup-darkening--remove-place').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--remove-place').toggleClass('popup-window--remove-place-show');
		$('.popup-darkening--remove-place').toggleClass('popup-darkening--remove-place-show');
	});
	// Log Out
	$('.toggle-logout-popup, .popup-darkening--logout').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--logout').toggleClass('popup-window--logout-show');
		$('.popup-darkening--logout').toggleClass('popup-darkening--logout-show');
	});
	// Delete member
	$('.toggle-delmember-popup, .popup-darkening--delmember').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--delmember').toggleClass('popup-window--delmember-show');
		$('.popup-darkening--delmember').toggleClass('popup-darkening--delmember-show');
	});
	// Invite member
	$('.toggle-invmember-popup, .popup-darkening--invmember').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--invmember').toggleClass('popup-window--invmember-show');
		$('.popup-darkening--invmember').toggleClass('popup-darkening--invmember-show');
	});
	// Save Info
	$('.toggle-saveinfo-popup, .popup-darkening--saveinfo').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--saveinfo').toggleClass('popup-window--saveinfo-show');
		$('.popup-darkening--saveinfo').toggleClass('popup-darkening--saveinfo-show');
	});
	// Join Circle
	$('.toggle-joincircle-popup, .popup-darkening--joincircle').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--joincircle').toggleClass('popup-window--joincircle-show');
		$('.popup-darkening--joincircle').toggleClass('popup-darkening--joincircle-show');
	});
	// Share
	$('.toggle-share-popup, .popup-darkening--share').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--share').toggleClass('popup-window--share-show');
		$('.popup-darkening--share').toggleClass('popup-darkening--share-show');
	});
	// Delete Account
	$('.toggle-delacc-popup, .popup-darkening--delacc').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--delacc').toggleClass('popup-window--delacc-show');
		$('.popup-darkening--delacc').toggleClass('popup-darkening--delacc-show');
	});
	// Code Error
	$('.toggle-code-error-popup, .popup-darkening--code-error').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--code-error').toggleClass('popup-window--code-error-show');
		$('.popup-darkening--code-error').toggleClass('popup-darkening--code-error-show');
	});
	// Create Circle
	$('.toggle-create-circle-popup, .popup-darkening--create-circle').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--create-circle').toggleClass('popup-window--create-circle-show');
		$('.popup-darkening--create-circle').toggleClass('popup-darkening--create-circle-show');
	});
	// Create Circle
	$('.toggle-server-error-popup, .popup-darkening--server-error').on('click', function(){
		$('body').toggleClass("no-scroll");
		$('.popup-window--server-error').toggleClass('popup-window--server-error-show');
		$('.popup-darkening--server-error').toggleClass('popup-darkening--server-error-show');
	});
});

// Accordion
$(function() {
    $('.mang-circles__item').each(function() {
        var $accordion = $(this);

        $(".mang-circles__item-top", $accordion).click(function(e) {
            e.preventDefault();
            $div = $(".mang-circles__item-content", $accordion);
            $div.slideToggle(200);
            $(".mang-circles__item-content").not($div).slideUp(200);
            $div.parent(".mang-circles__item").toggleClass('mang-circles__item--active').siblings().removeClass('mang-circles__item--active');
            return false;
        });

        $(".mang-circles__item-content").first().show();
    });
});

// top padding for fixed nav
$("body").css("paddingTop", $(".header-admin").outerHeight());

// Main sidebar dropdown
$(function() {
    $('.main-sidebar__dropdown').each(function() {
		$(".main-sidebar__dropdown-title").click(function(e) {
			e.preventDefault();
			$(".main-sidebar__dropdown-list").slideToggle(200);
			$('.main-sidebar__dropdown').toggleClass("left-sidebar__dropdown--active");
		});
	});
});

//Active list main sidebar
$(function() {
	var nav = document.getElementById("sidebar-nav"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "sidebar-nav-active";
		}
	}
});

//Active list main nav
$(function() {
	var nav = document.getElementById("main-nav"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "main-nav-active";
		}
	}
});

// scroll message window to botton on load page
$('.message-window').scrollTop($('.message-window')[0].scrollHeight);

// Textarea auto-expand
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
function autosize(){
	var el = this;
	setTimeout(function(){
		el.style.cssText = 'height:auto; padding:0';
		// for box-sizing other than "content-box" use:
		el.style.cssText = '-moz-box-sizing:content-box';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	},0);
}
