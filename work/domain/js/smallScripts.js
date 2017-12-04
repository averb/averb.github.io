
var navSpace = $('header').height();
$(function() {
	$('body').css({ paddingTop: navSpace});
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
	console.log("anchor = ",anchor,"current = ",current);
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "active";
		}
	}
});

//Submenu alignment
var sumMenuAlignment = $('.main-nav__submenu').width()/2;
var sumMenuAlignmentLi = $('.main-nav__submenu').parent().width()/2;
$('.main-nav__submenu').css({ left: - sumMenuAlignment, marginLeft: sumMenuAlignmentLi });

//Submenu opener
$(function() {
	$('li.with-sub').on('click', function(){
		$('.main-nav__submenu').toggleClass('main-nav__submenu--active');
		$('li.with-sub svg').toggleClass('active');
	})
});
$(document).click(function (e) {
	e.stopPropagation();
	var container = $("li.with-sub");
	//check if the clicked area is dropDown or not
	if (container.has(e.target).length === 0) {
		$('.main-nav__submenu').removeClass('main-nav__submenu--active');
		$('li.with-sub svg').removeClass('active');
	}
})

//Home types show more
var typesH = $('.home-main__types-items').height();
$(document).ready(function() {
	$('.home-main__types .more').on('click', function(){
		if($('.home-main__types-wrapper').attr('data-click-state') == 1) {
			$('.home-main__types-wrapper').attr('data-click-state', 0)
			$('.home-main__types-wrapper').removeClass('shadow');
			$('.home-main__types-wrapper').css({ marginBottom: '100px', height: '246px' });
			$('.home-main__types .more').html('Show All File Types');

		} else {
			$('.home-main__types-wrapper').attr('data-click-state', 1)
			$('.home-main__types-wrapper').addClass('shadow');
			$('.home-main__types-wrapper').css({ marginBottom: '14px', height: typesH });
			$('.home-main__types .more').html('Hide All File Types');
		}
	})
});

//Home-main pargin-bottom depend of height Seo text section
var smth = $('.home-main__smth').height();
$('.home-main').css({ paddingBottom: smth });

//Tabs
$(document).ready(function(){
	// Variables
	var clickedTab = $(".pricing-main__tabs > .active");
	var tabWrapper = $(".pricing-main__tab-content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	activeTab.show();
	tabWrapper.height(activeTabHeight);
	
	$(".pricing-main__tabs > li").on("click", function() {
		$(".pricing-main__tabs > li").removeClass("active");
		$(this).addClass("active");
		clickedTab = $(".pricing-main__tabs .active");
		activeTab.fadeOut(250, function() {
			$(".pricing-main__tab-content > li").removeClass("active");
			var clickedTabIndex = clickedTab.index();
			$(".pricing-main__tab-content > li").eq(clickedTabIndex).addClass("active");
			activeTab = $(".pricing-main__tab-content > .active");
			activeTabHeight = activeTab.outerHeight();
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 100, function() {
				activeTab.delay(50).fadeIn(250);
			});
		});
	});
});
