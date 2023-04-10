var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

module.exports = router;
 