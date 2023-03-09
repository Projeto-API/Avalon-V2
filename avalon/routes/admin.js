const express = require('express');
const router = express.Router();


// ------------CONTROLLERS E ROTAS PAINEL DE ADMINISTRADOR DO CRUD -------------//
const LivrosController = require('../controllers/LivrosController');
const AutoresController = require('../controllers/AutoresController');
const CategoriasController = require('../controllers/CategoriasController');
const TodososlivrosController = require('../controllers/TodososlivrosController');
const SinopseController = require('../controllers/SinopseController');

router.get('/Sinopse', SinopseController.index);
router.get('/Todososlivros', TodososlivrosController.index);
router.get('/autores', AutoresController.index);
router.get('/', LivrosController.index);
router.get('/admin/categorias', CategoriasController.index);


// ----------------------------------------CRUD --------------------------------------------//

router.post('/', LivrosController.criar);
router.post('/editar-livro', LivrosController.editar);
router.get('/editar/:id',  LivrosController.buscarLivro)
router.delete('/deletar/:id', LivrosController.deletar);






module.exports = router;