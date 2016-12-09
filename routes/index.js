var router = require('express').Router();

router.get('/:repo/:crid', function (req, res) {
  res.render('index', {domain: req.param('repo'), crid: req.param('reqId')});
});

module.exports = router;
