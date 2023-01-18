var express = require('express');
var router = express.Router();

const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');

// 
const produtoController = require('../controllers/produtoController');


router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);


router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
  });


  // C - Criação de novos serviços
router.get('/admin', produtoController.admin);
router.post('/admin', produtoController.criar);

// // R - Leitura de serviços
// router.get('/', produtoController.index);
// // router.get('/admin', produtoController.admin);

// // U - Atualização de serviços
// router.get('/editar/:id', produtoController.editar);


// // D - Remoção de serviços

router.delete('/produto/:id', (req, res) => {
  let {id} = req.params
   produtos = produto.filter(produto => produto.id != id);
});
module.exports = router;