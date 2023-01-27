var express = require('express');
var router = express.Router();
var multer = require('multer')
var path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, "public/images/produtos")
  },
  filename: (req, file, cb) => {
  cb(null, date.now() + path.extname(file.originalname))
  }
})

var upload = multer({storage: storage})

const estiloProdutosController = require('../controllers/estiloProdutosController');
const detalhesController = require('../controllers/detalhesController');
const cadastroProdutosController = require('../controllers/cadastroProdutosController');


// 
const produtoController = require('../controllers/produtoController');


router.get('/cadastroProdutos', cadastroProdutosController.listacadastroProdutos);
router.get('/detalhes', detalhesController.listadetalhes);
router.get('/estiloProdutos', estiloProdutosController.listaestiloProdutos);




  // C - Criação de novos serviços
router.get('/admin', produtoController.admin);
router.post('/admin', upload.single("capaImg"),produtoController.criar);



// // D - Remoção de serviços

router.delete('/deletar/:id', produtoController.deletar);
module.exports = router;