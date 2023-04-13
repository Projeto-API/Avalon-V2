var express = require('express');
const router = express.Router();

const SinopseController = require('../controllers/SinopseController');
const TodosLivros = require('../controllers/TodoslivrosController');
const CarrinhoController = require('../controllers/CarrinhoController');

const LancamentosController = require('../controllers/LancamentosController');



router.get('/lancamentos/', LancamentosController.index);
router.get('/sinopse/:id', SinopseController.index);
router.get('/todos/', TodosLivros.index);
router.get('/carrinho/', CarrinhoController.carrinho);
router.get('/todos/buscar', TodosLivros.search)
router.get('/todos/categoria/buscar/', TodosLivros.searchCategoria)



module.exports = router;
