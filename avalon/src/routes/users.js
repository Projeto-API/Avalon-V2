var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/paginaCadastro', function (req, res, next) {
  res.render('paginaCadastro', { title: 'Express', css: 'paginaCadastro' });
});

router.get('/paginaLogin', function (req, res, next) {
  res.render('paginaLogin', { title: 'Express', css: 'paginaLogin' });
});

router.get('/checkout', function (req, res, next) {
  res.render('checkout', { title: 'Express', css: 'checkout' });
});

router.get('/carrinho', function (req, res, next) {
  res.render('carrinho', { title: 'Express', css: 'carrinho' });
});

router.get('/pedidos', function (req, res, next) {
  res.render('usuario', { title: 'Express', css: 'usuario' });
});

router.get('/intranet', function (req, res, next) {
  res.render('intranet', { title: 'Express', css: 'usuario' });
});
module.exports = router;
