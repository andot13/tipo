var express = require('express');
var router = express.Router();

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

module.exports = router;
