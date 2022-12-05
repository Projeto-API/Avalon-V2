var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

=======
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
>>>>>>> paloma
module.exports = router;
