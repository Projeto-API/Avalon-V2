var express = require('express');
const router = express.Router();

const SinopseController = require('../controllers/SinopseController');
const TodosLivros = require('../controllers/TodosLivrosController');
const CarrinhoController = require('../controllers/CarrinhoController');
const EntregaController = require('../controllers/EntregaController');
const LancamentosController = require('../controllers/LancamentosController');


router.get('/enderecos/?', EntregaController.calcularfrete)
router.get('/lancamentos/', LancamentosController.index);
router.get('/sinopse/:id', SinopseController.index);
router.get('/todos/', TodosLivros.index);
router.get('/carrinho/', CarrinhoController.carrinho);
router.get('/todos/buscar', TodosLivros.search)
router.get('/todos/categoria/buscar/', TodosLivros.searchCategoria)





module.exports = router;

module.exports = router;