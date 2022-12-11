var express = require('express');
const paginaCadastroController = require('../controllers/paginaCadastroController');
const paginaLoginController = require('../controllers/paginaLoginController');
const usuarioController = require('../controllers/usuarioController');

var router = express.Router();

// /* GET home page. */
router.get('/paginaCadastro', paginaCadastroController.listapaginaCadastro);
router.get('/paginaLogin', paginaLoginController.listapaginaLogin);
router.get('/usuario', usuarioController.listausuario);
router.get('/checkout', function (req, res, next) {
  res.render('checkout', { title: 'Express', css: 'checkout' });
});

router.get('/carrinho', function (req, res, next) {
  res.render('carrinho', { title: 'Express', css: 'carrinho' });
});

router.get('/intranet', function (req, res, next) {
  res.render('intranet', { title: 'Express', css: 'usuario' });
});

 

module.exports = router;


