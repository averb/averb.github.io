// Login form
$(".login-form").validate({
	highlight: function ( element, errorClass, validClass ) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "error-item" )
			.removeClass( "valid-item" );
	},

	unhighlight: function (element, errorClass, validClass) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "valid-item" )
			.removeClass( "error-item" );
	},

	rules: {
		login: {
			required: true
		},
		pass: {
			required: true
		}
	},
	messages: {
		login: {
			required: "Обязательное поле"
		},
		pass: {
			required: "Обязательное поле"
		}
	}
});
