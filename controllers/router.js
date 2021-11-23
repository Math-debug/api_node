const router = require('express').Router();
const Controller = require('../model/rules');

router.get('/produtos', async function (req, res) {
  let obj = new Controller();
  let send = await obj.getProdutos();
  res.send(send);
})
router.post('/produtos', async function (req, res) {
  let obj = new Controller(req.body);
  let send = await obj.CreateProdutos();
  res.send(send);
})
module.exports = router;