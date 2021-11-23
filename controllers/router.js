const router = require('express').Router();
const Rules = require('../model/rules');

router.get('/produtos', async function (req, res) {
  let obj = new Rules();
  let send = await obj.getProdutos();
  res.send(send);
})
router.post('/produtos', async function (req, res) {
  let obj = new Rules(req.body);
  let send = await obj.CreateProdutos();
  res.send(send);
})
module.exports = router;