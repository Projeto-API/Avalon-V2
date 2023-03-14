const express = require('express');
const router = express.Router();


// ------------CONTROLLERS E ROTAS PAINEL DE ADMINISTRADOR DO CRUD -------------//
const LivrosController = require('../controllers/LivrosController');
const EditorasController = require('../controllers/EditorasController');
const AutoresController = require('../controllers/AutoresController');
const CategoriasController = require('../controllers/CategoriasController')



// ----------------------------------------CRUD LIVROS--------------------------------------------//

// GET ROUTES
router.get('/', LivrosController.index);
router.get('/buscar', LivrosController.search);
router.get('/editar-livro/:id', LivrosController.buscarLivro)
router.get('/form/:id?', LivrosController.form);


// POST E PUT ROUTES
router.post('/', LivrosController.criar);
router.put('/editar-livro/:id', LivrosController.editar);

// DELETE ROUTES
router.delete('/deletar/:id', LivrosController.deletar);


// ----------------------------------------CRUD EDITORAS--------------------------------------------//

// GET ROUTES
router.get('/editoras', EditorasController.index);
router.get('/editoras/buscar', EditorasController.search);  
router.get('/editoras/form/:id?', EditorasController.form);
router.get('/editoras/editar/:id', EditorasController.buscarEditora)

// POST E PUT ROUTES
router.post('/editoras', EditorasController.criar);
router.put('/editoras/editar/:id', EditorasController.editar);

// DELETE ROUTES
router.delete('/editoras/deletar/:id', EditorasController.deletar);

// ----------------------------------------CRUD AUTORES--------------------------------------------//

// GET ROUTES
router.get('/autores', AutoresController.index);
router.get('/autores/buscar', AutoresController.search);  
router.get('/autores/form/:id?', AutoresController.form);
router.get('/autores/editar/:id', AutoresController.buscarAutor)

// POST E PUT ROUTES
router.post('/autores', AutoresController.criar);
router.put('/autores/editar/:id', AutoresController.editar);

// DELETE ROUTES
router.delete('/autores/deletar/:id', AutoresController.deletar);

// ----------------------------------------CRUD Categorias--------------------------------------------//

// GET ROUTES
router.get('/categorias', CategoriasController.index);
router.get('/categorias/buscar', CategoriasController.search);  
router.get('/categorias/form/:id?', CategoriasController.form);
router.get('/categorias/editar/:id', CategoriasController.buscarCategoria)

// POST E PUT ROUTES
router.post('/categorias', CategoriasController.criar);
router.put('/categorias/editar/:id', CategoriasController.editar);

// DELETE ROUTES
router.delete('/categorias/deletar/:id', CategoriasController.deletar);


module.exports = router;
