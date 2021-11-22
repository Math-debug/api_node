const router = require('express').Router();
router.get('/teste', function (req, res) {
  res.send('hello world')
})
module.exports = router;
