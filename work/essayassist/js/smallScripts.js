//Open mobile nav
$(function() {
	$('.header-nav-toggler').on('click', function(){
		$('.header-nav').toggleClass('header-nav--open');
		$('.black-back').toggleClass('black-back--active');
		$('body').toggleClass('no-scroll-nav');
	});
});

// Select country and phone numbers
$(function() {
	$('.header-cntry').on('click', function(){
		$('.header-cntry').toggleClass('header-cntry--open');
	});
	$('.header-numbers').on('click', function(){
		$('.header-numbers').toggleClass('header-numbers--open');
	});
});
$(document).click(function (e) {
	e.stopPropagation();
	var container = $(".header-cntry, .header-numbers");
	//check if the clicked area is dropDown or not
	if (container.has(e.target).length === 0) {
		$('.header-cntry').removeClass('header-cntry--open');
		$('.header-numbers').removeClass('header-numbers--open');
	}
})
$(window).scroll(function() {
   if ($(this).scrollTop()){
	   $('.header-cntry').removeClass('header-cntry--open');
  	 $('.header-numbers').removeClass('header-numbers--open');
   }
});

//fixed nav on scroll
var fixTop = $('.header-cont').offset().top + 1;
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixTop) {
		$('.header-cont').addClass('header-cont--fixed');
		$('body').css({ paddingTop: $('.header-cont').height()});
	} else {
		$('.header-cont').removeClass('header-cont--fixed');
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

// TABS
$(document).ready(function(){
    $(".pricing-cont__tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $(".pricing-cont__tabs li.active").removeClass("active");
            $(this).addClass("active");
            $(".pricing-cont__tab li.active").removeClass("active");
            $(".pricing-cont__tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});

// Accordion
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

//Active nav
$(function() {
	var nav = document.getElementById("header-nav"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "active";
		}
	}
});

// Popup
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

// Why us mobile
if ($(window).width() <= 760) {
	(function($) {
		var hideText = $('.home-cont__why-text p').hide();
		$('.home-cont__why-text p').first().show().prev().addClass('active');
		$('.home-cont__why-text h3').on('click', function() {
			hideText.slideUp(200).prev().removeClass('active');
			$(this).next().slideDown(200).prev().addClass('active');
			return false;
		});
	})(jQuery);
}
