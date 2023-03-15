const express = require('express');
const EntregaController = require('../controllers/EntregaController');
const router = express.Router();



router.get('/endereco', EntregaController.obterEnderecoPorCep)
router.get('/frete')

module.exports = router; 