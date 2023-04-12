var express = require('express');
const router = express.Router();

const SinopseController = require('../controllers/SinopseController');
const TodosLivros = require('../controllers/TodosLivrosController');
const CarrinhoController = require('../controllers/CarrinhoController');

const LancamentosController = require('../controllers/LancamentosController');



router.get('/lancamentos/', LancamentosController.index);
router.get('/sinopse/:id', SinopseController.index);
router.get('/todos/', TodosLivros.index);

router.get('/carrinho', CarrinhoController.carrinho);



<<<<<<< HEAD


// router.get('/carrinho', function (req, res, next) {
//     res.render('carrinho', { title: 'Express', css: 'carrinho' });
//     router.delete('../remove', ServicosController.deletaServico)
//   });

module.exports = router;
=======
module.exports = router;
>>>>>>> palomacode
