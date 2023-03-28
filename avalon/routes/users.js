const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// MULTER AUTORES
// const multerDiskStorageUsuario = multer.diskStorage({
//     destination: (req, file, callback) => {
//         const folder = path.join(__dirname, '../public/images/usuarios');
//         callback(null, folder);
//     }
//     ,
//     filename: (req, file, callback) => {
//         const imageName = Date.now() + path.extname(file.originalname);
//         callback(null, imageName)
//     }
// })
// const filefoto = multer({ storage: multerDiskStorageUsuario });


const MinhasComprasController = require('../controllers/ComprasController');
const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/CadastrousuarioController');
const ContaController = require('../controllers/ContaController');



router.get('/compras', MinhasComprasController.index);
router.get('/conta', ContaController.index);
router.get('/login', LoginController.index);
router.get('/cadastro', UsuarioController.index);

router.post('/cadastro', UsuarioController.criar);

router.get('/editar-conta', UsuarioController.form);
router.put('/editar-conta', UsuarioController.editar);


// POST E PUT ROUTES

// router.post('/cadastro', filefoto.fields([{ name: 'foto' }]), CadastrousuarioController.criar);

module.exports = router;
