var express = require('express');
var router = express.Router();

/* GET produto page. */
router.get('/cadastroProduto', function (req, res, next) {
  res.render('cadastroProduto', { title: 'Express', css: 'cadastroProduto' });
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
