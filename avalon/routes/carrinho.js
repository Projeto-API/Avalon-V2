var express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkoutController');

router.get('/checkout', checkoutController.index);


router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
    router.delete('../remove', ServicosController.deletaServico)
  });

module.exports = router;