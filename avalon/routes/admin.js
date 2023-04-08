const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const validadorTipoUsuario = require('../middlewares/validadorTipoUsuario')
// MULTER LIVROS
const multerDiskStorageLivro = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname, '../public/images/produtos');
        callback(null, folder);
    }
    ,
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName)
    }
})
const filecapa = multer({ storage: multerDiskStorageLivro });
const fileimagens = multer({ storage: multerDiskStorageLivro });

// MULTER AUTORES
const multerDiskStorageAutor = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname, '../public/images/autores');
        callback(null, folder);
    }
    ,
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName)
    }
})
const filefoto = multer({ storage: multerDiskStorageAutor });



// ------------CONTROLLERS E ROTAS PAINEL DE ADMINISTRADOR DO CRUD -------------//
const LivrosController = require('../controllers/LivrosController');
const EditorasController = require('../controllers/EditorasController');
const AutoresController = require('../controllers/AutoresController');
const CategoriasController = require('../controllers/CategoriasController')

// ----------------------------------------CRUD LIVROS--------------------------------------------//

// GET ROUTES
router.get('/', validadorTipoUsuario, LivrosController.index);
router.get('/buscar', LivrosController.search);
router.get('/editar-livro/:id', LivrosController.buscarLivro)
router.get('/form/:id?', LivrosController.form);


// POST E PUT ROUTES
router.post('/', filecapa.fields([{ name: 'capa' }]), LivrosController.criar);
router.put('/editar-livro/:id', filecapa.fields([{ name: 'capa' }]), fileimagens.fields([{ name: 'imagens', maxCount:10 }]),LivrosController.editar);

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
router.post('/autores', filefoto.fields([{ name: 'foto' }]), AutoresController.criar);
router.put('/autores/editar/:id', filefoto.fields([{ name: 'foto' }]), AutoresController.editar);

// DELETE ROUTES
router.delete('/autores/deletar/:id', AutoresController.deletar);


// ----------------------------------------CRUD CATEGORIAS--------------------------------------------//

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
