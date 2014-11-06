$(document).ready(function() {
	$('.animate-fadein-left').addClass("hidden-elem").viewportChecker({
		classToAdd: 'visible-elem animated fadeInLeft',
		offset: 100,
		repeat: true
	});

	$('.animate-fadein-right').addClass("hidden-elem").viewportChecker({
		classToAdd: 'visible-elem animated fadeInRight',
		offset: 100,
		repeat: true
	});

	$('.animate-fadein-down').addClass("hidden-elem").viewportChecker({
		classToAdd: 'visible-elem animated fadeInDown',
		offset: 100,
		repeat: true
	});

	$('.animate-fadein').addClass("hidden-elem").viewportChecker({
		classToAdd: 'visible-elem animated fadeIn',
		offset: 100,
		repeat: true
	});


	//Contact Form
	$("#contact-us-form").submit(function()
	{
		var email = $("#email").val(); // get email field value
		var name = $("#name").val(); // get name field value
		var message = $("#message").val(); // get message field value
		$.ajax(
		{
			type: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'yBkqCWXGZL4qhvesUtqymQ',
				'message': {
					'from_email': email,
					'from_name': name,
					'headers': {
						'Reply-To': email
					},
					'subject': 'optiBPO Contact Form Submission',
					'text': message,
					'to': [
					{
						'email': 'andotjackass@gmail.com',
						'name': 'Andy',
						'type': 'to'
					}]
				}
			}
		})
		.done(function(response) {
			alert('Your message has been sent. Thank you!'); // show success message
			$("#name").val(''); // reset field after successful submission
			$("#email").val(''); // reset field after successful submission
			$("#message").val(''); // reset field after successful submission
		})
		.fail(function(response) {
			alert('Error sending message.');
		});
		return false; // prevent page refresh
	});


});
