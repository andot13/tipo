$(document).ready(function() {
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
