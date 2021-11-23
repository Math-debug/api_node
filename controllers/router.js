const router = require('express').Router();
const Controller = require('../model/rules');

router.get('/produtos', function (req, res) {
  let obj = new Controller(true);
  let send = obj.getProdutos();
  res.send(send);
})
router.post('/produtos', function (req, res) {
  console.log(req.body);
  let obj = new Controller(true,req.body);
  let send = obj.CreateProdutos();
  res.send(send);
})
module.exports = router;