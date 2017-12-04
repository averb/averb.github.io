// Forbid cyrillic
function withoutCyr(input) {
	var value = input.value;
	var re = /а|б|в|г|д|е|ё|ж|з|и|ї|і|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|є|ю|я/gi;
	if (re.test(value)) {
		value = value.replace(re, '');
		input.value = value;
	}
}

//Modal validation
$("#gaq-form").validate({
	rules: {
		username: {
			required: true,
			minlength: 3
		},
		email: {
			required: true,
			email: true
		},
		number: {
			required: true,
			number: true
		},
		link: {
			required: true,
			minlength: 5
		},
		comment: {
			required: true,
			minlength: 5
		}
	},
	messages: {
		username: {
			required: "Error: enter your name",
			minlength: "Your name must consist of at least 2 characters"
		},
		email: {
			required: "Error: company's e-mail",
			email: "Not valid e-mail"
		},
		number: {
			required:"Error: enter phone number",
			minlength: "Enter a valid phone number"
		},
		link: {
			required:"Error: enter link",
			minlength: "Link must consist of at least 5 characters"
		},
		comment: {
			required:"Error: enter your message",
			minlength: "Your message must consist of at least 5 characters"
		}
	}
});

// Contact form validate options
$("#contact-form").validate({
	rules: {
		username: {
			required: true,
			minlength: 3
		},
		email: {
			required: true,
			email: true
		},
		subject: {
			required: true,
			minlength: 4
		},
		comment: {
			required: true,
			minlength: 5
		}
	},
	messages: {
		username: {
			required: "Error: enter your name",
			minlength: "Your name must consist of at least 2 characters"
		},
		email: {
			required: "Error: enter your e-mail",
			email: "Not valid e-mail"
		},
		subject: {
			required:"Error: enter subject",
			minlength: "Subject must consist of at least 3 characters"
		},
		comment: {
			required:"Error: enter your message",
			minlength: "Your message must consist of at least 5 characters"
		}
	}
});
