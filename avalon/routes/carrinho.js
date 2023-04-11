var express = require('express');
var router = express.Router();

const EntregaController = require('../controllers/EntregaController');
const CheckoutController = require('../controllers/CheckoutController');
const CarrinhoController = require('../controllers/CarrinhoController')
const auth = require('../middlewares/auth')

/* GET users listing. */
router.get('/enderecos/?', EntregaController.calcularfrete)
router.get('/',  CarrinhoController.carrinho);

router.delete('/', CarrinhoController.remove);
router.post('/', CarrinhoController.teste);

router.get('/checkout/', auth , CheckoutController.index);
router.get('/checkout/:id',  CheckoutController.index);


module.exports = router;