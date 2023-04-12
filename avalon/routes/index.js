var express = require('express');
<<<<<<< HEAD
=======
var router = express.Router();


>>>>>>> palomacode
const homeController = require('../controllers/homeController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

<<<<<<< HEAD
=======


>>>>>>> palomacode
module.exports = router;
