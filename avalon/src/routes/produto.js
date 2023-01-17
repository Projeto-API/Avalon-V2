var express = require('express');

const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');

// 
const produtoController = require('../controllers/produtoController');

var router = express.Router();
router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);


router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
  });


  // C - Criação de novos serviços
router.get('/admin', produtoController.admin);
router.post('/produto/admin', produtoController.criar);

// R - Leitura de serviços
router.get('/', produtoController.index);
// router.get('/admin', produtoController.admin);

// U - Atualização de serviços
router.get('/editar/:id', produtoController.editar);


// D - Remoção de serviços
router.delete('/deletar/:id', produtoController.deletar);



module.exports = router;