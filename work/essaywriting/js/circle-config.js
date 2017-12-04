var show = true;

$(window).scroll(function(event) {
    if ($('.home__stat').length > 0) {
        var statsPos = $('.home__stat').offset().top - $(window).height();
    }
    else {
        return false;
    }

    if (!show) return false;

    if ($(window).scrollTop() > statsPos) {
        statCircle ();
        show = false;
    }
});

function statCircle () {

    var circleOptions = {
        size: 86,
        fill: { color: "#eaa541" },
        emptyFill: 'transparent',
        startAngle: -Math.PI / 4 * 3,
        thickness: 3,
        animation: {duration: 2500},
        easing: "circleProgressEase"
    };

    //Number animate

    circleOptions.value = 0.97;

    $('.first-circle').circleProgress(circleOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        //$(this).find('strong').html(String(stepValue.toFixed(2)).substr(2) + '.3%');
    });

    circleOptions.value = 0.9;

    $('.second-circle').circleProgress(circleOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        //$(this).find('strong').html(10 * String(stepValue.toFixed(1)) + ' out of 10');
    });

    circleOptions.value = 0.98;

    $('.third-circle').circleProgress(circleOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        //$(this).find('strong').html(String(stepValue.toFixed(2)).substr(2) + '.8%');
    });

    circleOptions.value = 0.78;

    $('.fourth-circle').circleProgress(circleOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        //$(this).find('strong').html(String(stepValue.toFixed(2)).substr(2) + '.6%');
    });
}
