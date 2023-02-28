// var express = require('express');
// var router = express.Router();
// var multer = require('multer')
// var path = require('path')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//   cb(null, "public/images/Livros")
//   },
//   filename: (req, file, cb) => {
//   cb(null, date.now() + path.extname(file.originalname))
//   }
// })

// var upload = multer({storage: storage})

// //---------BANDO DE DADOS LIVROS --------- ////

// const LivroController = require('../controllers/LivroController');
// const AutorController = require('../controllers/AutorController');
// const CategoriaController = require('../controllers/CategoriaController');
// const EditoraController = require('../controllers/EditoraController');



// router.get('/admin', LivroController.index);
// router.get('/admin/autores', AutorController.index);
// router.get('/admin/categorias', CategoriaController.index);
// router.get('/admin/editoras', EditoraController.index);

// module.exports = router;
// // -------------------------------------CONTROLLERS -------------------------------//
// const TodososLivrosController = require('../controllers/TodososLivrosController');
// const SinopseController = require('../controllers/SinopseController');
// const CadastroLivrosController = require('../controllers/CadastroLivrosController');
// const LivroController = require('../controllers/LivroController');
// // const AutoresController = require('../controllers/AutoresController');

// //------------------------------------------ ROTAS --------------------------//
// router.get('/CadastroLivros', CadastroLivrosController.listaCadastroLivros);
// router.get('/Sinopse', SinopseController.listaSinopse);
// router.get('/TodososLivros', TodososLivrosController.listaTodososLivros);
// // router.get('/autores', AutoresController.index);


// //---------------------------CRUD-----------//
//   // C - Criação de novos serviços

// router.post('/admin', upload.single("capaImg"),LivroController.criar);

// // Rota de busca de Livros
// router.get('/buscar', LivroController.buscar);

//   // R - Leitura novos serviços
// router.get('/admin', LivroController.admin);

// // // U - Atualização de serviços
// router.put('/editar/:id',LivroController.atualizar);

// // // D - Remoção de serviços

// router.delete('/deletar/:id', LivroController.deletar);
// module.exports = router;
const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');
const AutoresController = require('../controllers/AutoresController');


router.get('/', LivrosController.index);

router.get('/form/:id?', LivrosController.form);

router.post('/', LivrosController.criar);

router.put('/editar/:id', LivrosController.editar);

router.delete('/deletar/:id', LivrosController.deletar);

router.get('/autores', AutoresController.index);

module.exports = router;