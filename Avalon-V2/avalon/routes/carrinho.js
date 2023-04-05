var express = require('express');
var router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController')
<<<<<<< HEAD:Avalon-V2/avalon/routes/carrinho.js
const validaCarrinho = require('../middewres/validaCarrinho')

/* GET users listing. */
router.get('/', CarrinhoController.carrinho);
// router.post('/', CarrinhoController.add);
router.delete('/', CarrinhoController.remove);
router.post('/', CarrinhoController.teste);
// router.post('/', validaCarrinho.validaCarrinho, CarrinhoController.teste);
=======

/* GET users listing. */
router.get('/', CarrinhoController.carrinho);
router.post('/', CarrinhoController.add);
router.delete('/', CarrinhoController.remove);
>>>>>>> fac21a0e7e276989155fd7c7c685c377b067f16b:avalon/routes/carrinho.js

module.exports = router;