var express = require("express");
var router = express.Router();
var mandrill = require('mandrill-api');
var mandrill_client = new mandrill.Mandrill('yBkqCWXGZL4qhvesUtqymQ'); 

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'optiBPO - optimising business outsourcing' , id: 'homepage'});
});

router.get('/how-we-work', function(req, res) {
	res.render('how-we-work.jade', { title: 'How we work', id: 'how-we-work'});
});

router.get('/pricing', function(req, res) {
	res.render('pricing.jade', { title: 'Pricing', id: 'pricing'});
});

router.get('/why-philippines', function(req, res) {
	res.render('why-philippines.jade', { title: 'Why Philippines', id: 'why-philippines'});
});

router.get('/contact-us', function(req, res) {
	res.render('contact-us.jade', { title: 'Contact us', id: 'contact-us'});
});

router.post('/contact-us', function(req, res) {
	req.assert('name', 'Please enter you name.').notEmpty();
	req.assert('email', 'Please provide a valid email').isEmail();  

	var errors = req.validationErrors();  
	if( !errors){   //No errors were found.  Passed Validation!
		res.redirect('/contact-us');
		// , { 
		// 	title: 'Contact us',
		// 	message: 'Thank you! Your message has been sent!',
		// 	id: 'contact-us',
		// 	successClass : 'success',
		// 	errors: {}
		// });

			var name = req.body.name;
			var email = req.body.email;
			var message = req.body.message;

			var message = {
			    "text": message,
			    "subject": "optiBPO Contact Form Submission",
			    "from_email": email,
			    "from_name": name,
			    "to": [{
			            "email": "andotjackass@gmail.com",
			            "name": "Andy"
			        }],
			    "headers": {
			        "Reply-To": email
			    },
			    "track_opens": true,
			    "track_clicks": true,
			    "auto_text": true
			};

			mandrill_client.messages.send({"message": message}, function(result) {
		    console.log(result);
		   
			}, function(e) {
			    // Mandrill returns the error as an object with name and message keys
			    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
			    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
			});
	}
	else {   //Display errors to user
		res.redirect('/contact-us');
		// , { 
		// 	title: 'Contact us',
		// 	message: 'There seems to be an error. Please try again',
		// 	id: 'contact-us',
		// 	message: 'Error!',
		// 	errors: errors
		// });
	}
});


module.exports = router;
