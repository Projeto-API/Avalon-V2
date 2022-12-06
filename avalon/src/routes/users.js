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
module.exports = router;
