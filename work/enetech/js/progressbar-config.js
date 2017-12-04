$(function () {
    var circle1, circle2, circle3, circle4;

    $('.js-stats').on('inview', function(event, isInView) {
        if (isInView) {
            circle1 = new ProgressBar.Circle(".circle-one", {
				color: '#fff',
                strokeWidth: 1.3,
                easing: 'easeInOut',
                duration: 1400,
                trailColor: '#3b3635',
                trailWidth: 1.3,
                from: { color: '#fff', width: 1.3 },
                to: { color: '#fff', width: 1.3 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = parseInt(circle.value() * 100);
                    circle.setText(value  + '.3<i>%</i>');

                }
            });

            circle1.animate(0.97);

            circle2 = new ProgressBar.Circle(".circle-two", {
				color: '#fff',
                strokeWidth: 1.3,
                easing: 'easeInOut',
                duration: 1400,
                trailColor: '#3b3635',
                trailWidth: 1.3,
                from: { color: '#fff', width: 1.3 },
                to: { color: '#fff', width: 1.3 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = parseInt(circle.value() * 10);
                    circle.setText(value + ' <i>out of 10</i>');

                }
            });

            circle2.animate(0.9);

            circle3 = new ProgressBar.Circle(".circle-three", {
				color: '#fff',
                strokeWidth: 1.3,
                easing: 'easeInOut',
                duration: 1400,
                trailColor: '#3b3635',
                trailWidth: 1.3,
                from: { color: '#fff', width: 1.3 },
                to: { color: '#fff', width: 1.3 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = parseInt(circle.value() * 100);
                    circle.setText(value + '.8<i>%</i>');

                }
            });

            circle3.animate(0.98);

            circle4 = new ProgressBar.Circle(".circle-four", {
				color: '#fff',
                strokeWidth: 1.3,
                easing: 'easeInOut',
                duration: 1400,
                trailColor: '#3b3635',
                trailWidth: 1.3,
                from: { color: '#fff', width: 1.3 },
                to: { color: '#fff', width: 1.3 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = parseInt(circle.value() * 100);
                    circle.setText(value + '.6<i>%</i>');

                }
            });

            circle4.animate(0.78);
        } else {
            circle1.destroy();
            circle2.destroy();
            circle3.destroy();
            circle4.destroy();
        }
    });
});
