
module.exports = router;

var express = require('express');
var router = express.Router();

const checkoutController = require('../controllers/checkoutController');
const CarrinhoController = require('../controllers/CarrinhoController')


/* GET users listing. */
router.get('/', CarrinhoController.carrinho);
// router.post('/', CarrinhoController.add);
router.delete('/', CarrinhoController.remove);
router.post('/', CarrinhoController.teste);

router.get('/checkout', checkoutController.index);

// router.post('/', validaCarrinho.validaCarrinho, CarrinhoController.teste);



module.exports = router;