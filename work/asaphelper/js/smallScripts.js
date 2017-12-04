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

$('.phone-number', '.phone-form')

	.keydown(function (e) {
		var key = e.charCode || e.keyCode || 0;
		$phone = $(this);

		// Auto-format- do not expose the mask as the user begins to type
		if (key !== 8 && key !== 9) {
			if ($phone.val().length === 3) {
				$phone.val($phone.val() + ' ');
			}
			if ($phone.val().length === 7) {
				$phone.val($phone.val() + ' ');
			}
		}

		// Allow numeric (and tab, backspace, delete) keys only
		return (key == 8 ||
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));
	})

// FAQ accordion
$(function() {
	$('.faq-cont__item').each(function() {
		var $accordion = $(this);
		$(".faq-cont__question", $accordion).click(function(e) {
			e.preventDefault();
			$div = $(".faq-cont__answer", $accordion);
			$div.slideToggle(400);
			$(".faq-cont__answer").not($div).slideUp(400);
			$div.parent(".faq-cont__item").toggleClass('faq-cont__item--active').siblings().removeClass('faq-cont__item--active');
			return false;
		});
		$(".faq-cont__answer").first().show();
	});
});

//Modal opener
$(function() {
	$('.result-modal-toggler').on('click', function(){
		$('.result-modal-cover').toggleClass('result-modal-cover--open');
		$('body').toggleClass('no-overflow-modal');
	});
});
