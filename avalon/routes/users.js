var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');

// MULTER AUTORES
const multerDiskStorageUsuario = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname, '../public/images/usuarios');
        callback(null, folder);
    }
    ,
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName)
    }
})
const filefoto = multer({ storage: multerDiskStorageUsuario });


const MinhasComprasController = require('../controllers/MinhasComprasController');
const LoginController = require('../controllers/LoginController');
const CadastroUsuarioController = require('../controllers/CadastrousuarioController');


router.get('/compras', MinhasComprasController.index);
router.get('/login', LoginController.index);
router.get('/cadastro', CadastroUsuarioController.index);
router.post('/cadastro', CadastroUsuarioController.criar);

// POST E PUT ROUTES

// router.post('/cadastro', filefoto.fields([{ name: 'foto' }]), CadastrousuarioController.criar);

module.exports = router;
