const express = require('express');
const router = express.Router();


// ------------CONTROLLERS E ROTAS PAINEL DE ADMINISTRADOR DO CRUD -------------//
const LivrosController = require('../controllers/LivrosController');
const AutorController = require('../controllers/AutorController');
const CategoriasController = require('../controllers/CategoriasController');
const TodososlivrosController = require('../controllers/TodososlivrosController');
const SinopseController = require('../controllers/SinopseController');
router.get('/Sinopse', SinopseController.index);
router.get('/todososlivros', TodososlivrosController.index);
router.get('/autores', AutorController.index);
router.get('/', LivrosController.index);
router.get('/categoria', CategoriasController.index);


// ----------------------------------------CRUD --------------------------------------------//
router.get('/form/:id?', LivrosController.form);
router.post('/', LivrosController.criar);
router.post('/editar-livro/:id', LivrosController.editar);
router.get('/editar/:id',  LivrosController.buscarLivro)
router.delete('/deletar/:id', LivrosController.deletar);






module.exports = router;