const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');



const MinhasComprasController = require('../controllers/MinhasComprasController');
const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/CadastrousuarioController');
const AuthController = require('../controllers/AuthController');
const ContaController = require('../controllers/ContaController');

router.get('/compras', MinhasComprasController.index);
router.get('/conta', ContaController.index);
router.get('/login', LoginController.index);
router.post('/entrar', LoginController.login);
router.get('/cadastro', UsuarioController.index);
router.post('/cadastro', UsuarioController.criar);
router.get('/editar-conta', UsuarioController.form);
router.put('/editar-conta', UsuarioController.editar);


router.get('/forgot-password', LoginController.forgotPassword);
router.post('/login', AuthController.login);
router.post('/forgot-password', AuthController.forgotPassword);

router.get('/forgot-password', (req, res) => {
    console.log(req.flash('error')); // Verificar se a variável messages está sendo definida corretamente
    res.render('forgot-password', { messages: req.flash('error') });
   
  });



module.exports = router;