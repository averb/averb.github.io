// Forbid cyrillic
function withoutCyr(input) {
	var value = input.value;
	var re = /а|б|в|г|д|е|ё|ж|з|и|ї|і|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|є|ю|я/gi;
	if (re.test(value)) {
		value = value.replace(re, '');
		input.value = value;
	}
}

// Company page form
$(".material-form").validate({
	highlight: function ( element, errorClass, validClass ) {
        $( element )
            .parents( ".material-form__item" )
            .addClass( "error-item" )
            .removeClass( "valid-item" );
    },

    unhighlight: function (element, errorClass, validClass) {
        $( element )
            .parents( ".material-form__item" )
            .addClass( "valid-item" )
            .removeClass( "error-item" );
    },
	rules: {
		username: {
			required: true,
			minlength: 3
		},
		email: {
			required: true,
			email: true
		},
		massage: {
			required: true,
			minlength: 5
		},
		pass: {
			required: true,
			minlength: 5
		},
		passConf: {
			required: true,
			minlength: 5,
			equalTo: "#pass"
		}
	},
	messages: {
		username: {
			required: "Fill in the required field",
			minlength: "Minimum 3 characters"
		},
		email: {
			required: "Fill in the required field",
			email: "Wrong e-mail format"
		},
		massage: {
			required:"Fill in the required field",
			minlength: "Minimum 5 characters"
		},
		pass: {
			required:"Fill in the required field",
			minlength: "Minimum 5 characters"
		},
		passConf: {
			required:"Fill in the required field",
			minlength: "Minimum 5 characters",
			equalTo: "Enter the same password as above"
		}
	}
});
