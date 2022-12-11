var express = require('express');
<<<<<<< HEAD
const ControllerCarrinho = require('../controllers/ControllerCarrinho');
=======
const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');
>>>>>>> paloma
var router = express.Router();
router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);


<<<<<<< HEAD


router.get('/carrinho', ControllerCarrinho.listaLivrosServicos);



router.get('/cadastroProdutos', function (req, res, next) {
  res.render('cadastroProdutos', { title: 'Express', css: 'cadastroProdutos' });
});
router.get('/detalhes', function (req, res, next) {
  res.render('detalhes', { title: 'Express', css: 'detalhes' });
});

router.get('/estiloProdutos', function (req, res, next) {
  res.render('estiloProdutos', { title: 'Express', css: 'estiloProdutos' });
});
router.get('/usuario', function (req, res, next) {
  res.render('usuario', { title: 'Express', css: 'usuario' });
});

module.exports = router;
=======
router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
  });
module.exports = router;
>>>>>>> paloma
