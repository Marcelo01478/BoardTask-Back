const express = require('express');
const conectarBancoDados = require('../middlewares/conectarBD');
const router = express.Router();

/* GET users listing. */
router.get('/', conectarBancoDados, function(req, res, next) {
  console.log("var:", process.env.Test)
  res.send('respond with a resource');
});

module.exports = router;
