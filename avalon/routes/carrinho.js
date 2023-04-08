var express = require('express');
var router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController')
const validaCarrinho = require('../middewres/validaCarrinho')

/* GET users listing. */
router.get('/', CarrinhoController.carrinho);
// router.post('/', CarrinhoController.add);
router.delete('/', CarrinhoController.remove);
router.post('/', CarrinhoController.teste);

// router.post('/', validaCarrinho.validaCarrinho, CarrinhoController.teste);



module.exports = router;