var express = require('express');
const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');
const ServicosController = require('../controllers/servicosController')
var router = express.Router();
router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
<<<<<<< HEAD
router.get('/estiloProdutos', estiloProdutosController.listaEstiloProdutos);


=======
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);
router.get('/admin', ServicosController.mostraAdminServicos);
>>>>>>> paloma

router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
    router.delete('../remove', ServicosController.deletaServico)
  });

module.exports = router;