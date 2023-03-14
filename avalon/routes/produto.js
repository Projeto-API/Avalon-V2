var express = require('express');
const router = express.Router();

const SinopseController = require('../controllers/SinopseController');
const TodosLivros = require('../controllers/TodosLivrosController');


router.get('/sinopse/:id', SinopseController.index);
router.get('/todos/', TodosLivros.index);



router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
    router.delete('../remove', ServicosController.deletaServico)
  });

module.exports = router;