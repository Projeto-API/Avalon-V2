var express = require('express');
const produtoController = require('../controllers/produtoController');
var router = express.Router();

/* GET home page. */
router.get('/', produtoController.listaproduto);
 

module.exports = router;
