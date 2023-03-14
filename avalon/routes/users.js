var express = require('express');
var router = express.Router();


const MinhasComprasController = require('../controllers/MinhasComprasController');
const LoginController = require('../controllers/LoginController');
const CadastrousuarioController = require('../controllers/CadastrousuarioController');


router.get('/compras', MinhasComprasController.index);
router.get('/login', LoginController.index);
router.get('/cadastro', CadastrousuarioController.index);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
