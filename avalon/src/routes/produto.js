var express = require('express');
var router = express.Router();
const validadorFormProdutos = require('../dataBase/middlewares/validadorFormProdutos')
const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');


// 
const produtoController = require('../controllers/produtoController');


router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);




  // C - Criação de novos serviços
router.get('/admin', produtoController.admin);
router.post('/admin',validadorFormProdutos, produtoController.criar);


// Rota de busca de produtos
router.get('/buscar', produtoController.buscar);

  // R - Leitura novos serviços
router.get('/admin', produtoController.admin);

// // U - Atualização de serviços
router.get('/editar/:id', produtoController.buscarporid);


// // D - Remoção de serviços

router.delete('/deletar/:id', produtoController.deletar);
module.exports = router;
