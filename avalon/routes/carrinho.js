var express = require('express');
var router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController')

/* GET users listing. */
router.get('/', CarrinhoController.carrinho);
// router.post('/', CarrinhoController.teste);
router.post('/deletar', CarrinhoController.remove);

module.exports = router;