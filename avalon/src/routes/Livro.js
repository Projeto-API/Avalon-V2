var express = require('express');
var router = express.Router();
var multer = require('multer')
var path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, "public/images/Livros")
  },
  filename: (req, file, cb) => {
  cb(null, date.now() + path.extname(file.originalname))
  }
})

var upload = multer({storage: storage})

const TodososLivrosController = require('../controllers/TodososLivrosController');
const SinopseController = require('../controllers/SinopseController');
const CadastroLivrosController = require('../controllers/CadastroLivrosController');


const LivroController = require('../controllers/LivroController');


router.get('/CadastroLivros', CadastroLivrosController.listaCadastroLivros);
router.get('/Sinopse', SinopseController.listaSinopse);
router.get('/TodososLivros', TodososLivrosController.listaTodososLivros);




  // C - Criação de novos serviços

router.post('/admin', upload.single("capaImg"),LivroController.criar);

// Rota de busca de Livros
router.get('/buscar', LivroController.buscar);

  // R - Leitura novos serviços
router.get('/admin', LivroController.admin);

// // U - Atualização de serviços
router.put('/editar/:id',LivroController.atualizar);



// // D - Remoção de serviços

router.delete('/deletar/:id', LivroController.deletar);
module.exports = router;