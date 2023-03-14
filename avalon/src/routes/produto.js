var express = require('express');
const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');
const ServicosController = require('../controllers/servicosController')
const { body } = require('express-validator')


//Validações Cadastro Produtos:
const validacoes = [
  body('tituloLivro').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString()
  .withMessage('É obrigatório o uso de caracter alfabético'),
  body('autor').notEmpty().withMessage('É obrigatório preencher o autor').bail().isString(),
  body('editora').notEmpty().withMessage('É obrigatório preencher a editora').bail().isString(),
  body('idioma').notEmpty().withMessage('É obrigatório preencher o idioma').bail().isString(),
  body('paginas').notEmpty().withMessage('É obrigatório preencher o número de páginas').bail().isNumeric(),
  body('publicacao').notEmpty().withMessage('É obrigatório preenhcer a data da publicação').bail().isDate(),
  body('dimensoes').notEmpty().withMessage('É obrigatório preencher as dimensões').bail().isString(),
  body('acabamento').notEmpty().withMessage('É obrigatório preencher o acabamento').bail().isString(),
  body('isbn').notEmpty().withMessage('É obrigatório preecher o ISBN-10').bail().isNumeric(),
  body('preco').notEmpty().withMessage('É obrigatório preencher o preço').bail().isNumeric(),
  body('sinopse').notEmpty().withMessage('É obrigatório preencher a sinopse').bail().isString,
];




var router = express.Router();
router.get('/cadastroProdutos', validacoes, cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaEstiloProdutos);



router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Express', css: 'carrinho' });
    router.delete('../remove', ServicosController.deletaServico)
  });

module.exports = router;