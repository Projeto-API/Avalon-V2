const express = require('express');
const router = express.Router();
const {check} = require('express-validator');



// ------------CONTROLLERS E ROTAS PAINEL DE ADMINISTRADOR DO CRUD -------------//
const LivrosController = require('../controllers/LivrosController');
const EditorasController = require('../controllers/EditorasController');
const AutoresController = require('../controllers/AutoresController');
const CategoriasController = require('../controllers/CategoriasController')
const TodososlivrosController = require('../controllers/TodososlivrosController');


// ----------------------------------------CRUD LIVROS--------------------------------------------//

// GET ROUTES
router.get('/', LivrosController.index);
router.get('/buscar', LivrosController.search);
router.get('/editar-livro/:id', LivrosController.buscarLivro)
router.get('/form/:id?', LivrosController.form);
router.get('/Todososlivros', TodososlivrosController.index);

// POST E PUT ROUTES
router.post('/', LivrosController.criar);
router.put('/editar-livro/:id', LivrosController.editar);

// DELETE ROUTES
router.delete('/deletar/:id', LivrosController.deletar);

// ------------------------------------VALIDAÇÕES EDITORAS------------------------------------------//

const validacoesEditoras = [
    check('título').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString(),
    check('cnpj').notEmpty().withMessage('É obrigatório preencher a cnpj').bail().isNumeric(),
];


// ----------------------------------------CRUD EDITORAS--------------------------------------------//

// GET ROUTES
router.get('/editoras', EditorasController.index);
router.get('/editoras/buscar', EditorasController.search);  
router.get('/editoras/form/:id?', EditorasController.form);
router.get('/editoras/editar/:id', EditorasController.buscarEditora)

// POST E PUT ROUTES
router.post('/editoras',validacoesEditoras, EditorasController.criar);
router.put('/editoras/editar/:id', EditorasController.editar);

// DELETE ROUTES
router.delete('/editoras/deletar/:id', EditorasController.deletar);

// ------------------------------------VALIDAÇÕES AUTORES------------------------------------------//

const validacoesAutores = [
    check('nome').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString(),
    check('biografia').notEmpty().withMessage('É obrigatório preencher a biografia').bail().isString(),
];

// ----------------------------------------CRUD AUTORES--------------------------------------------//

// GET ROUTES
router.get('/autores', AutoresController.index);
router.get('/autores/buscar', AutoresController.search);  
router.get('/autores/form/:id?',  AutoresController.form);
router.get('/autores/editar/:id', AutoresController.buscarAutor)

// POST E PUT ROUTES
router.post('/autores',validacoesAutores, AutoresController.criar);
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
