const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const MinhasComprasController = require('../controllers/MinhasComprasController');
const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/CadastrousuarioController');
const IntranetController = require('../controllers/IntranetController')

router.get('/login/intranet', IntranetController.index);
router.get('/compras', MinhasComprasController.index);
router.get('/login', LoginController.index);
router.post('/entrar', LoginController.login);
router.get('/cadastro', UsuarioController.index);
router.post('/cadastro', UsuarioController.criar);





module.exports = router;
