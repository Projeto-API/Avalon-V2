var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController');
const SobreNos = require('../controllers/SobreNos');


/* GET home page. */
router.get('/', homeController.index);
router.get('/sobre-nos', SobreNos.index);





module.exports = router;