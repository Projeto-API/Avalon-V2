const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// ----- MULTER USUARIOS
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
const UsuarioController = require('../controllers/CadastrousuarioController');
const AuthController = require('../controllers/AuthController');
const ContaController = require('../controllers/ContaController');
const auth = require('../middlewares/auth')

router.get('/compras/:id', auth, MinhasComprasController.index);
router.get('/conta/:id', auth, ContaController.index);
router.get('/logout', ContaController.deslogar);
router.get('/login', LoginController.index);
router.post('/entrar', LoginController.login);
router.get('/cadastro', UsuarioController.index);
router.post('/cadastro', filefoto.fields([{ name: 'foto' }]), UsuarioController.criar);
router.get('/conta/editar-conta/:id', filefoto.fields([{ name: 'foto' }]), ContaController.form);
router.put('/conta/editar-conta/:id', filefoto.fields([{ name: 'foto' }]), ContaController.editar);


router.get('/forgot-password', LoginController.forgotPassword);
router.post('/login', AuthController.login);
router.post('/forgot-password', AuthController.forgotPassword);

router.get('/forgot-password', (req, res) => {
    console.log(req.flash('error')); // Verificar se a variável messages está sendo definida corretamente
    res.render('forgot-password', { messages: req.flash('error') });
   
  });



module.exports = router;

