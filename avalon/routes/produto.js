var express = require('express');
const router = express.Router();

const SinopseController = require('../controllers/SinopseController');
const TodosLivros = require('../controllers/TodosLivrosController');
const CarrinhoController = require('../controllers/CarrinhoController');
const EntregaController = require('../controllers/EntregaController');



router.get('/enderecos/?', EntregaController.calcularfrete)

router.get('/sinopse/:id', SinopseController.index);
router.get('/todos/', TodosLivros.index);
router.get('/carrinho/', CarrinhoController.carrinho);



// router.get('/carrinho', function (req, res, next) {
//     res.render('carrinho', { title: 'Express', css: 'carrinho' });
//     router.delete('../remove', ServicosController.deletaServico)
//   });

module.exports = router;