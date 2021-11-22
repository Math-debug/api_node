const router = require('express').Router();
const rules = require('../model/rules');
router.get('/produtos', function (req, res) {
  let send = rules.Controller.getProdutos(true)
  res.send(send)
})
module.exports = router;