var express = require('express');
const ControllerCarrinho = require('../controllers/ControllerCarrinho');
var router = express.Router();



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
