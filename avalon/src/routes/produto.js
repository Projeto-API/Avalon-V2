var express = require('express');
var router = express.Router();
// const multer = require('multer')
const path = require('path')
const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');


// 
const produtoController = require('../controllers/produtoController');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, "public/images/servicos")
//   } ,
  // filename: (req, file, cb) => {
  //     cb(null, Date.now() + path.extname(file.originalname))
  // } ,

// const upload = multer({storage: storage, limits: {fileSize: 10000000}})

router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);




  // C - Criação de novos serviços
router.get('/admin', produtoController.admin);
router.post('/admin', produtoController.criar);


// Rota de busca de produtos
router.get('/buscar', produtoController.buscar);


// // U - Atualização de serviços
router.get('/editar/:id', produtoController.buscarporid);


// // D - Remoção de serviços

router.delete('/deletar/:id', produtoController.deletar);
module.exports = router;