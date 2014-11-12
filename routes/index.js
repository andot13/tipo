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

router.get('/the-business-case', function(req, res) {
	res.render('the-business-case.jade', { title: 'The Business Case', id: 'the-business-case'});
});

router.post('/contact-us', function(req, res) {


	var name = req.body.name;
	var email = req.body.email;
	var postMessage = req.body.message;

	var message = {
	    "text": postMessage,
	    "subject": "optiBPO Contact Form Submission",
	    "from_email": email,
	    "from_name": name,
	    "to": [{
	            "email": "jamie.mcbrien@optim2.com",
	            "name": "Jamie Mcbrien"
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

});


module.exports = router;
