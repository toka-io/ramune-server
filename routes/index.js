var router = require('express').Router();

router.get('/:repo/:crid', function (req, res) {
  res.render('index', {domain: req.param('repo'), crid: req.param('reqId')});
});

router.get('/sample', function (req, res) {
  res.render('sample');
});

module.exports = router;
