var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'optiBPO - optimising business outsourcing' , id: 'homepage'});
});

router.get('/how-we-work', function(req, res) {
  res.render('how-we-work.jade', { title: 'How we work', id: 'how-we-work'});
});

module.exports = router;
