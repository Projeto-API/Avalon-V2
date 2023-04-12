const express = require('express');
const EntregaController = require('../controllers/EntregaController');
const router = express.Router();



router.get('/enderecos', EntregaController.obterEnderecoPorCep)


module.exports = router; 