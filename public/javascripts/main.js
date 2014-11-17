$(document).ready(function() {

//form validation rules
	$("#contact-us-form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: "Please enter your name",
			email: "Oops! Please provide a valid email address"
		},
		errorElement: "div",
		wrapper: "div",  // a wrapper around the error message
		errorPlacement: function(error, element) {
			element.before(error);
			offset = element.offset();
			error.addClass('message');  // add a class to the wrapper
			offset = element.offset();
		},
		submitHandler: function (form) {
			$.ajax({
				type: $(form).attr('method'),
				url: $(form).attr('action'),
				data: $(form).serialize(),
				timeout: 400,
				complete: function() {
					$("#success").html("Thank you! Your message has been sent.").fadeIn();
					$("#name, #email, #message").val("");
				}
			});
			
			return false; // required to block normal submit since you used ajax
		}
	});

	$('.financial-controller-au').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated financial-controller-au-expandwidth',
	    offset: 100
   	});

	$('.financial-controller-mnl').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated financial-controller-mnl-expandwidth',
	    offset: 100
   	});

	$('.senior-accountant-au').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated senior-accountant-au-expandwidth',
	    offset: 100
   	});

	$('.senior-accountant-mnl').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated senior-accountant-mnl-expandwidth',
	    offset: 100
   	});

	$('.assistant-accountant-au').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated assistant-accountant-au-expandwidth',
	    offset: 100
   	});

	$('.assistant-accountant-mnl').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated assistant-accountant-mnl-expandwidth',
	    offset: 100
	});

	$('.accounts-clerk-au').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated accounts-clerk-au-expandwidth',
	    offset: 100
   	});

	$('.accounts-clerk-mnl').addClass("hidden-elem").viewportChecker({
	    classToAdd: 'visible-elem animated accounts-clerk-mnl-expandwidth',
	    offset: 100
	});
 




});