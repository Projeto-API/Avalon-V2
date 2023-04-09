var express = require('express');
var router = express.Router();

const EntregaController = require('../controllers/EntregaController');
const checkoutController = require('../controllers/checkoutController');
const CarrinhoController = require('../controllers/CarrinhoController')


/* GET users listing. */
router.get('/enderecos/?', EntregaController.calcularfrete)
router.get('/', CarrinhoController.carrinho);

router.delete('/', CarrinhoController.remove);
router.post('/', CarrinhoController.teste);

router.get('/checkout', checkoutController.index);


module.exports = router;